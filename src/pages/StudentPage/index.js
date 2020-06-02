import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import GraphGroup from '../../modules/GraphGroup';
import {Grid, Divider} from '@material-ui/core';
import GridItem from '../../modules/GridItem';
import PieChart from '../../modules/PieChart';
import BarGraph from '../../modules/BarGraph';
import LineChart from '../../modules/LineCharts';

function StudentPage() {
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
    <>
      <Grid container direction="row" spacing={6}>
        <GridItem
          xs={4}
          isTabbed
          title={graphData.student.stud_hired_per_year_bar.title}
        >
          <GraphGroup
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
        </GridItem>
        <GridItem
          xs={4}
          title={graphData.student.stud_hired_per_year_pie.title}
        >
          <PieChart data={graphData.student.stud_branch_pie} />
        </GridItem>
        <GridItem xs={4} title={graphData.student.stud_profile_hbar.title}>
          <BarGraph color={1} data={graphData.student.stud_profile_hbar} />
        </GridItem>
      </Grid>

      <br />
      <Divider light variant="middle" flexItem style={{height: 1}} />
      <br />

      <Grid container direction="row" spacing={6}>
        <GridItem xs={6} title={graphData.student.stud_cgpa_line.title}>
          <LineChart data={graphData.student.stud_cgpa_line} />
        </GridItem>

        <GridItem xs={6} title={graphData.student.stud_package_hbar.title}>
          <BarGraph color={1} data={graphData.student.stud_package_hbar} />
        </GridItem>
        {console.log(graphData)}
      </Grid>
      <br />
      <br />
      <br />
      <br />
    </>
  ) : (
    <div className="loader"></div>
  );
}

export default StudentPage;
