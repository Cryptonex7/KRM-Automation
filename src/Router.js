import React, {lazy} from 'react';
import {Switch, Route} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';
import headerHoc from './hoc/headerHoc';
import withStyles from '@material-ui/core/styles/withStyles';
import './App.scss';
import {globalStyles} from './globalStyles';
import UseOnDesktopDialog from './modules/UseOnDesktopDialog';
import GetStartedDialog from './modules/GetStartedDialog';

const HomePage = lazy(() => import('./pages/HomePage'));

function Router(props) {
  return (
    <>
      <Switch>
        <Route exact path="/" component={suspenseHoc(headerHoc(HomePage))} />
      </Switch>
      <UseOnDesktopDialog open={true} />
      <GetStartedDialog />
    </>
  );
}

export default withStyles(globalStyles)(Router);
