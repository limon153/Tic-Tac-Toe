import React from 'react';
import Button from 'material-ui/Button';
import Dialog, { DialogActions, DialogTitle } from 'material-ui/Dialog';

const ResetDialog = props => (
  <Dialog
    open={props.open}
    onClose={props.handleClose}
    aria-labelledby="reset-dialog-title"
    aria-describedby="reset-dialog-description"
  >
    <DialogTitle id="reset-dialog-title">
      {'Are you sure you want reset the game?'}
    </DialogTitle>
    <DialogActions>
      <Button onClick={props.handleClose} color="primary">
        No
      </Button>
      <Button onClick={props.handleReset} color="primary" autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default ResetDialog;
