import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';

import withStyles from '@material-ui/core/styles/withStyles';
import {withRouter} from 'react-router-dom';

import {styles} from './styles';
import CustomAppBar from './components/CustomAppBar';
import SideDrawer from './components/SideDrawer';
// import Footer from '../../modules/Footer';

const withScaffold = (WrapComponent) => {
  class HocContent extends React.Component {
    render() {
      const {classes} = this.props;

      return (
        <>
          <div className={classes.root}>
            <CssBaseline />
            <CustomAppBar />
            <SideDrawer />
            <main className={classes.content}>
              <Toolbar />
              <WrapComponent />
              {/* <Footer /> */}
            </main>
          </div>
        </>
      );
    }
  }

  return withStyles(styles)(withRouter(HocContent));
};

export default withScaffold;
