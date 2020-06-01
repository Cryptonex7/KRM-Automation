import React, {lazy} from 'react';
import {Switch, Route, Redirect} from 'react-router';
import suspenseHoc from './hoc/suspenseHoc';
import withScaffold from './hoc/withScaffold';
import withStyles from '@material-ui/core/styles/withStyles';
import './App.scss';
import {globalStyles} from './globalStyles';
import UseOnDesktopDialog from './modules/UseOnDesktopDialog';
import GetStartedDialog from './modules/GetStartedDialog';

const StudentPage = lazy(() => import('./pages/StudentPage'));
const CompanyPage = lazy(() => import('./pages/CompanyPage'));

function Router(props) {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/StudentAnalytics"
          component={suspenseHoc(StudentPage)}
        />
        <Route
          exact
          path="/CompanyAnalytics"
          component={suspenseHoc(CompanyPage)}
        />
      </Switch>
      <Redirect from="/" to="/StudentAnalytics" />
      <GetStartedDialog />
      <UseOnDesktopDialog />
    </>
  );
}

export default withStyles(globalStyles)(withScaffold(Router));
