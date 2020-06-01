import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import {Grid, Divider} from '@material-ui/core';
import GridItem from '../../modules/GridItem';
import PieChart from '../../modules/PieChart';
import BarGraph from '../../modules/BarGraph';

function CompanyPage() {
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
        <GridItem xs={12} title={graphData.company.comp_cgpa_hbar.title}>
          <BarGraph color={1} data={graphData.company.comp_cgpa_hbar} />
        </GridItem>
        {console.log(graphData)}
      </Grid>

      <br />
      <Divider light variant="middle" flexItem style={{height: 1}} />
      <br />

      <Grid container direction="row" spacing={6}>
        <GridItem xs={4} title={graphData.company.comp_branch_pie.title}>
          <PieChart data={graphData.company.comp_branch_pie} />
        </GridItem>
        <GridItem xs={4} title={graphData.company.comp_gender_pie.title}>
          <PieChart data={graphData.company.comp_gender_pie} />
        </GridItem>
        <GridItem xs={4} title={graphData.company.comp_profile_pie.title}>
          <PieChart data={graphData.company.comp_profile_pie} />
        </GridItem>
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

export default CompanyPage;
