

import React, { useState } from 'react'

import { withStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'

import Dialog from '@material-ui/core/Dialog'

import MuiDialogTitle from '@material-ui/core/DialogTitle'

import MuiDialogContent from '@material-ui/core/DialogContent'

import MuiDialogActions from '@material-ui/core/DialogActions'

import IconButton from '@material-ui/core/IconButton'

import CloseIcon from '@material-ui/icons/Close'

import Typography from '@material-ui/core/Typography'

import { UndoSharp } from '@material-ui/icons'

// import { Button, Dialog, DialogTitle as MuiDialogTitle, DialogContent as MuiDialogContent, MuiDialogActions as DialogActions, Typography } from '@material-ui/core'


const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});


const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
})) (MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
})) (MuiDialogActions);


export default function CustomDialog({ state, setState, Custom: { Title, Divider }, ButtonsAction, children }) {


    const Close = async () => await setState({ ...state, Dialog: false })


    return <div>
        <Dialog onClose = { Close } aria-labelledby = 'Dialog' open = { state.Dialog }>
          <DialogTitle id = 'Dialog' onClose = { Close }>
            { Title }
          </DialogTitle>
          <DialogContent dividers = { Divider }>
              { children }
          </DialogContent>
          <DialogActions>
            <Button autoFocus startIcon = { <UndoSharp/> } onClick = { Close } color = 'primary'>
              Cancelar
            </Button>
            { ButtonsAction?.map( ({ Label, onClick, Icon, Color = 'primary', Disabled }, _) => <Button key = { _ } onClick = { onClick } startIcon = { Icon } color = { Color } disabled = { Disabled }>{ Label }</Button> ) }
          </DialogActions>
        </Dialog>
      </div>


}

