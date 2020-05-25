import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useStyles} from './styles';
import {getAllGraphData} from '../../services/actions';
import useTheme from '@material-ui/core/styles/useTheme';
import LandingSection from './components/LandingSection';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Divider from '@material-ui/core/Divider';
import GraphGroup from './components/GraphGroup';
import Footer from '../../modules/Footer';

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const graphData = useSelector((state) => state.thunk.graphData);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    const fetchGraphData = async () => {
      await dispatch(getAllGraphData);
    };
    fetchGraphData();
  }, [dispatch]);
  return Object.keys(graphData).length > 0 ? (
    <>
      <div className={classes.flexCol}>
        <div className={classes.root}>
          <div className={classes.compressor}>
            {/* Header Section  */}
            <LandingSection />
            {matches ? (
              <>
                <div className={classes.flexRow}>
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
                </div>
                <br />
                <Divider light variant="middle" flexItem style={{height: 1}} />
                <br />
                <div className={classes.flexRow}></div>
              </>
            ) : (
              <>
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
              </>
            )}
          </div>
          {console.log(graphData)}
          <Footer />
        </div>
      </div>
    </>
  ) : (
    <div className="loader"></div>
  );
}

export default HomePage;
