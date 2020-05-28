import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import NightsStay from '@material-ui/icons/NightsStay';
import WbSunny from '@material-ui/icons/WbSunny';
import {useSelector, useDispatch} from 'react-redux';
import withStyles from '@material-ui/core/styles/withStyles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

import {styles} from '../styles';
import {toggleTheme} from '../../../services/actions';
import Slide from '@material-ui/core/Slide';

function HideOnScroll(props) {
  const {children, window} = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({target: window ? window() : undefined});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function CustomAppBar({classes}) {
  const isDarkTheme = useSelector((state) => state.theme.isDarkTheme);
  const dispatch = useDispatch();
  return (
    <HideOnScroll>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            KIIT KRM Automation
          </Typography>
          <div className={classes.grow} />
          <IconButton
            className={isDarkTheme && classes.theme}
            edge="end"
            onClick={() => dispatch(toggleTheme())}
          >
            {isDarkTheme ? <NightsStay /> : <WbSunny />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default withStyles(styles)(CustomAppBar);
