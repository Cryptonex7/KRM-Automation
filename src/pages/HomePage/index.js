import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import Divider from '@material-ui/core/Divider';
import GraphGroup from './components/GraphGroup';
import {Grid} from '@material-ui/core';

function HomePage() {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);

  useEffect(() => {
    const fetchGraphData = async () => {
      await dispatch(getAllGraphData);
    };
    fetchGraphData();
  }, [dispatch]);
  return Object.keys(graphData).length > 0 ? (
    <Grid>
      <GraphGroup
        title="Students Hired Per Year"
        group={[
          {
            data: graphData.student.stud_hired_per_year_bar,
            title: 'Number',
          },
          {
            data: graphData.student.stud_hired_per_year_pie,
            title: 'Percentage',
          },
        ]}
      />
      <br />
      <Divider light variant="middle" flexItem style={{height: 1}} />
      <br />
      <GraphGroup
        title="Students Hired Per Year"
        group={[
          {
            data: graphData.student.stud_hired_per_year_bar,
            title: 'Number',
          },
          {
            data: graphData.student.stud_hired_per_year_pie,
            title: 'Percentage',
          },
        ]}
      />
      {console.log(graphData)}
    </Grid>
  ) : (
    <div className="loader"></div>
  );
}

export default HomePage;
