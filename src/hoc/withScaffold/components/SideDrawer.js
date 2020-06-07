import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import StorageIcon from '@material-ui/icons/Storage';
import DnsIcon from '@material-ui/icons/Dns';
import TimelineIcon from '@material-ui/icons/Timeline';
import AssessmentIcon from '@material-ui/icons/Assessment';
import SettingsIcon from '@material-ui/icons/Settings';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import InfoIcon from '@material-ui/icons/Info';

import withStyles from '@material-ui/core/styles/withStyles';

import {styles} from '../styles';
import {withRouter} from 'react-router';
import Logo from '../../../assets/Logo';

function SideDrawer({classes, history}) {
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
        paperAnchorLeft: classes.noBorder,
      }}
    >
      <Toolbar />
      <div className={classes.drawerContainer}>
        <div className={classes.brandContainer}>
          <Logo className={classes.logo} onClick={() => history.push('/')} />
          <div className={classes.headerText}>
            KIIT Placements {new Date().getFullYear()} Analysis
          </div>
          <div className={classes.headerSubText}>
            The Power of Analytics to Korporate Relationship Management!
          </div>
        </div>
        <Divider />
        <List>
          {[
            'Student Analytics',
            'Company Analytics',
            'Student Database',
            'Company Database',
          ].map((text, index) => {
            const pathMatch =
              window.location.pathname === `/${text.split(' ').join('')}`;
            return (
              <ListItem
                button
                key={text}
                onClick={() => history.push(`/${text.split(' ').join('')}`)}
                className={pathMatch && classes.activeTab}
              >
                <ListItemIcon>
                  {index === 0 && (
                    <AssessmentIcon
                      className={pathMatch && classes.activeIcon}
                    />
                  )}
                  {index === 1 && (
                    <TimelineIcon className={pathMatch && classes.activeIcon} />
                  )}
                  {index === 2 && (
                    <StorageIcon className={pathMatch && classes.activeIcon} />
                  )}
                  {index === 3 && (
                    <DnsIcon className={pathMatch && classes.activeIcon} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
        <List>
          {['Settings', 'Contact Us', 'About Us'].map((text, index) => {
            const pathMatch =
              window.location.pathname === `/${text.split(' ').join('')}`;
            return (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index === 0 && (
                    <SettingsIcon className={pathMatch && classes.activeIcon} />
                  )}
                  {index === 1 && (
                    <ContactSupportIcon
                      className={pathMatch && classes.activeIcon}
                    />
                  )}
                  {index === 2 && (
                    <InfoIcon className={pathMatch && classes.activeIcon} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
}

export default withStyles(styles)(withRouter(SideDrawer));
