/* eslint-disable react/display-name */
import React, {useEffect, forwardRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllCompanyData, addCompanyData} from '../../services/actions';
import MaterialTable from 'material-table';
import {useTheme} from '@material-ui/core/styles';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => (
    <AddBox {...props} ref={ref} displayName="hello" />
  )),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function CompanyDatabasePage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.thunk.companyData);

  useEffect(() => {
    const fetchGraphData = async () => {
      await dispatch(getAllCompanyData);
    };
    fetchGraphData();
  }, [dispatch]);
  return (
    <>
      <MaterialTable
        style={{
          width: '100%',
          borderRadius: 8,
          border: 'none',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper,
          transition: 'all 750ms',
        }}
        options={{
          maxBodyHeight: '80vh',
          headerStyle: {
            position: 'sticky',
            top: 0,
            background: theme.palette.accent.secondary,
            color: 'white',
          },
          rowStyle: () => {
            return {
              backgroundColor: theme.palette.background.paper,
              transition: 'all 750ms',
            };
          },
          exportAllData: true,
          exportButton: true,
          addRowPosition: 'first',
        }}
        icons={tableIcons}
        isLoading={companyData === null}
        columns={[
          {title: '#ID', field: 'compid'},
          {title: 'Name', field: 'name'},
          {title: 'Hired 2015', field: 'hired15', type: 'numeric'},
          {title: 'Hired 2016', field: 'hired16', type: 'numeric'},
          {title: 'Hired 2017', field: 'hired17', type: 'numeric'},
          {title: 'Hired 2018', field: 'hired18', type: 'numeric'},
          {title: 'Hired 2019', field: 'hired19', type: 'numeric'},
        ]}
        data={
          companyData
            ? companyData.company_list
            : [
                {
                  compid: '75-446-4409',
                  hired15: 5,
                  hired16: 7,
                  hired17: 4,
                  hired18: 10,
                  hired19: 6,
                  name: 'Lehner and Sons',
                },
              ]
        }
        title="Company Database"
        editable={{
          onRowAdd: (newData) =>
            new Promise(async (resolve) => {
              const bodyFormData = new FormData();
              bodyFormData.append('name', newData.name);
              bodyFormData.append('compid', newData.compid);
              bodyFormData.append('hired15', newData.hired15);
              bodyFormData.append('hired16', newData.hired16);
              bodyFormData.append('hired17', newData.hired17);
              bodyFormData.append('hired18', newData.hired18);
              bodyFormData.append('hired19', newData.hired19);
              console.log(bodyFormData);
              await dispatch(addCompanyData(bodyFormData));
              resolve();
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  /* setState((prevState) => {
                        const data = [...prevState.data];
                        data[data.indexOf(oldData)] = newData;
                        return {...prevState, data};
                      }); */
                }
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                /* setState((prevState) => {
                      const data = [...prevState.data];
                      data.splice(data.indexOf(oldData), 1);
                      return {...prevState, data};
                    }); */
              }, 600);
            }),
        }}
      />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default CompanyDatabasePage;
