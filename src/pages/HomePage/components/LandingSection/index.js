import React from 'react';
import {useStyles} from '../../styles';
import logo from '../../../../assets/logo.svg';

function LandingSection() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.header}>
        <img alt="" src={logo} className={classes.headerImage} />
        <div className={classes.headerContent + classes.flexCol}>
          <div className={classes.headerText}>
            KIIT Placements {new Date().getFullYear()} Analysis
          </div>
          <div className={classes.headerSubText}>
            The Power of Analytics to Korporate Relationship Management!
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingSection;
