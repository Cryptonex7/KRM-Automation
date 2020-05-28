import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import logo from '../../assets/logo.svg';

function UseOnDesktopDialog(props) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <Dialog open={!matches}>
      <img src={logo} alt=" " width="70%" style={{margin: '0 auto'}} />
      <DialogTitle>Visiting us on a Mobile Device?</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please login using a <b>Desktop</b> to get the full functionality of
          our app!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}

export default UseOnDesktopDialog;
