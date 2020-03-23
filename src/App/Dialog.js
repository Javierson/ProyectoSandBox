

import React from "react";

import { withStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";

import MuiDialogTitle from "@material-ui/core/DialogTitle";

import MuiDialogContent from "@material-ui/core/DialogContent";

import MuiDialogActions from "@material-ui/core/DialogActions";

import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";

import Typography from "@material-ui/core/Typography";

import { UndoSharp } from "@material-ui/icons";

// import { Button, Dialog, DialogTitle as MuiDialogTitle, DialogContent as MuiDialogContent, MuiDialogActions as DialogActions, Typography } from '@material-ui/core'

const styles = ({ spacing, palette: { grey } }) => ({
  root: {
    margin: 0,
    padding: spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: spacing(1),
    top: spacing(1),
    color: grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(({ spacing }) => ({
  root: {
    padding: spacing(2)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(({ spacing }) => ({
  root: {
    margin: 0,
    padding: spacing(1)
  }
}))(MuiDialogActions);

export default function CustomDialog({
  OpenDialog,
  CloseDialog,
  Custom: { Title, Divider } = { },
  ButtonsAction,
  children
}) {

  // const [ state, setState ] = useState({ OpenDialog: Open }), { OpenDialog } = state, Close = async () => await setState({ ...state, OpenDialog: false })

  return <div>
      <Dialog onClose={CloseDialog} aria-labelledby="Dialog" open = { OpenDialog }>
        <DialogTitle id="Dialog" onClose={CloseDialog}>{ Title }</DialogTitle>
        <DialogContent dividers={Divider}>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus startIcon={<UndoSharp/>} onClick={CloseDialog} color="primary">Cancelar</Button>
          { ButtonsAction?.map( ({ Label, Type, OnClick, Icon, Color = "primary", Disabled }, _) => <Button type={Type} key={_} onClick={OnClick} startIcon={Icon} color={Color} disabled={Disabled}>{ Label }</Button> ) }
        </DialogActions>
      </Dialog>
    </div>


}

