import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';

import logo from '../../assets/logo.svg';
import {DialogActions, Button} from '@material-ui/core';

function GetStartedDialog() {
  const [open, setopen] = useState(true);
  return (
    <Dialog open={open} onClose={() => setopen(false)}>
      <img src={logo} alt=" " width="70%" style={{margin: '0 auto'}} />
      <DialogTitle>Welcome to KRM Automation</DialogTitle>
      <DialogContent>
        <DialogContentText>
          The Power of Analytics to KIIT Corporate Relationship Management!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          variant="contained"
          fullWidth
          onClick={() => setopen(false)}
        >
          Get Started
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default GetStartedDialog;
