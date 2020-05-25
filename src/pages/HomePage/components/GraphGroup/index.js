import React, {useState} from 'react';
import {useStyles} from './styles';
// import useTheme from '@material-ui/core/styles/useTheme';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Divider from '@material-ui/core/Divider';
import BarGraph from '../StateWise/components/BarGraph';
import PieChart from '../TravelHistory/PieChart';

function GraphGroup(props) {
  const {group, title} = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);

  // const theme = useTheme();
  // const matches = useMediaQuery(theme.breakpoints.down('md'));
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className={classes.GraphGroup}>
      <div className={classes.title}>{title}</div>
      {/* {matches ? ( */}
      <>
        <Tabs
          value={value}
          onChange={handleChange}
          classes={{indicator: classes.indicator}}
        >
          {group.map((data, idx) => (
            <Tab
              key={idx}
              label={data.title}
              classes={{wrapper: classes.tabs}}
            />
          ))}
        </Tabs>
        {value === 0 && <BarGraph data={group[0].data} color={1} />}
        {value === 1 && <PieChart data={group[1].data} />}
      </>
      {/* ) : (
        <div className={classes.flexCol}>
          <BarGraph data={group[0].data} color={1} />
          <Divider light variant="middle" flexItem style={{height: 1}} />
          <PieChart data={group[1].data} />
        </div>
      )} */}
    </div>
  );
}
export default GraphGroup;
