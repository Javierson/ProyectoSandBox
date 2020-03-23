

import React, { useState } from "react";
import clsx from "clsx";
import { createPortal } from "react-dom";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Drawer,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  Tooltip,
  ListItem
} from "@material-ui/core";

import { LogIn } from "../LogIn";

import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import MenuIcon from "@material-ui/icons/Menu";
import { AccountCircleSharp } from "@material-ui/icons";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import MailIcon from "@material-ui/icons/Mail"
// import InboxIcon from "@material-ui/icons/MoveToInbox"

import { Link } from "react-router-dom";

const drawerWidth = 240,
  useStyles = makeStyles(theme => ({
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: 36
    },
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap"
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1
      }
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    }
  })),
  {
    DrawerSetUp: { MenuDivider },
    Routes
  } = require("../AppModules");

export default function MiniDrawer({ children }) {
  const classes = useStyles(),
    theme = useTheme(),
    [open, setOpen] = useState(false),
    handleDrawerOpen = () => setOpen(true),
    handleDrawerClose = () => setOpen(false),
    [state, setState] = useState({ Title: undefined, Dialog: false }),
    { Title, Dialog } = state;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            { Title }
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          { Routes?.map(({ Label, Path, Icon }, _) =>
            <>
              <Link to={Path} key={_}>
              <Tooltip title = { Label } placement = 'right'>
                <ListItem button onClick = { async () => await setState({ ...state, Title: Label }) }>
                  <ListItemIcon>{ Icon }</ListItemIcon>
                  <ListItemText primary = { Label }/>
                </ListItem>
              </Tooltip>
              </Link>
              { _ !== 0 && _ % MenuDivider === 0 && <Divider /> }
            </>
          ) }
          <Tooltip title = 'Inisiar sesion' placement = 'right'>
          <ListItem button onClick = { async () => await setState({ ...state, Dialog: true }) }>
            <ListItemIcon>
              <AccountCircleSharp />
            </ListItemIcon>
            <ListItemText primary="Inisiar sesion" />
          </ListItem>
          </Tooltip>
        </List>
        <Divider />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.toolbar} />

        {children}
      </main>

      {createPortal(
        <LogIn
          OpenDialog={Dialog}
          CloseDialog={async () => await setState({ ...state, Dialog: false })}
        />,
        document.getElementById("Dialog")
      )}

    </div>
  );
}

