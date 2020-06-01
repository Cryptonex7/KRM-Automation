import React, {useState} from 'react';
import {useStyles} from './styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BarGraph from '../BarGraph';
import PieChart from '../PieChart';

function GraphGroup(props) {
  const {group} = props;
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs
        value={value}
        onChange={handleChange}
        classes={{indicator: classes.indicator}}
      >
        {group.map((data, idx) => (
          <Tab key={idx} label={data.title} classes={{wrapper: classes.tabs}} />
        ))}
      </Tabs>
      {value === 0 && <BarGraph data={group[0].data} color={1} {...props} />}
      {value === 1 && <PieChart data={group[1].data} {...props} />}
    </>
  );
}
export default GraphGroup;
