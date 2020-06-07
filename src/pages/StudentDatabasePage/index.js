/* eslint-disable react/display-name */
import React, {useEffect, forwardRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAllStudentData, addStudentData} from '../../services/actions';
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

function StudentDatabasePage() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const studentData = useSelector((state) => state.thunk.studentData);

  useEffect(() => {
    const fetchGraphData = async () => {
      await dispatch(getAllStudentData);
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
        }}
        options={{
          maxBodyHeight: '80vh',
          headerStyle: {
            position: 'sticky',
            top: 0,
            background: theme.palette.secondary.main,
          },
          exportAllData: true,
          exportButton: true,
          addRowPosition: 'first',
        }}
        icons={tableIcons}
        isLoading={studentData === null}
        columns={[
          {title: 'Roll No.', field: 'rollno', type: 'numeric'},
          {title: 'Name', field: 'name'},
          {
            title: 'Gender',
            field: 'gender',
            lookup: {M: 'Male', F: 'Female', O: 'Other'},
          },
          {title: 'Branch', field: 'branch'},
          {title: 'CGPA', field: 'cgpa', type: 'numeric'},
          {title: 'Company', field: 'company'},
          {title: 'CTC', field: 'ctc', type: 'numeric'},
        ]}
        data={
          studentData
            ? studentData.student_list
            : [
                {
                  branch: 'IT',
                  cgpa: '9',
                  company: 'High Radius',
                  ctc: 8,
                  gender: 'M',
                  name: 'Pamelia Brigmond',
                  profile: 'Data Scientist',
                  rollno: 1703241,
                },
              ]
        }
        title="Student Database"
        editable={{
          onRowAdd: (newData) =>
            new Promise(async (resolve) => {
              const bodyFormData = new FormData();
              bodyFormData.append('branch', newData.branch);
              bodyFormData.append('cgpa', newData.cgpa);
              bodyFormData.append('company', newData.company);
              bodyFormData.append('ctc', newData.ctc);
              bodyFormData.append('gender', newData.gender);
              bodyFormData.append('studName', newData.name);
              bodyFormData.append('profile', newData.profile);
              bodyFormData.append('rollno', newData.rollno);
              console.log(bodyFormData);
              await dispatch(addStudentData(bodyFormData));
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

export default StudentDatabasePage;
