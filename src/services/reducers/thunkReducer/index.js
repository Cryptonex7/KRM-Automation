import * as actions from '../../actionTypes';

const graphState = {
  graphData: {},
  graphDataPending: false,
  graphDataError: {},
  studentData: null,
  studentDataPending: false,
  studentDataError: {},
  companyData: null,
  companyDataPending: false,
  companyDataError: {},
};

const graphReducer = (state = graphState, action) => {
  switch (action.type) {
    case actions.GET_GRAPH_DATA_CONFIRMED_PENDING:
      return Object.assign({}, state, {graphDataPending: true});
    case actions.GET_GRAPH_DATA_CONFIRMED_SUCCESS:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphData: {
          ...state.graphData,
          day_wise_confirmed: action.payload,
        },
      });
    case actions.GET_GRAPH_DATA_CONFIRMED_FAILED:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphDataError: action.payload,
      });
    case actions.GET_GRAPH_DATA_ALL_PENDING:
      return Object.assign({}, state, {graphDataPending: true});
    case actions.GET_GRAPH_DATA_ALL_SUCCESS:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphData: action.payload,
      });
    case actions.GET_GRAPH_DATA_ALL_FAILED:
      return Object.assign({}, state, {
        graphDataPending: false,
        graphDataError: action.payload,
      });
    case actions.GET_STUDENT_DATA_PENDING:
      return Object.assign({}, state, {studentDataPending: true});
    case actions.GET_STUDENT_DATA_SUCCESS:
      return Object.assign({}, state, {
        studentDataPending: false,
        studentData: action.payload,
      });
    case actions.GET_STUDENT_DATA_FAILED:
      return Object.assign({}, state, {
        studentDataPending: false,
        studentDataError: action.payload,
      });
    case actions.ADD_STUDENT_DATA_PENDING:
      return Object.assign({}, state, {studentDataPending: true});
    case actions.ADD_STUDENT_DATA_SUCCESS:
      return Object.assign({}, state, {
        studentDataPending: false,
        studentData: action.payload,
      });
    case actions.ADD_STUDENT_DATA_FAILED:
      return Object.assign({}, state, {
        studentDataPending: false,
        studentDataError: action.payload,
      });
    case actions.GET_COMPANY_DATA_PENDING:
      return Object.assign({}, state, {companyDataPending: true});
    case actions.GET_COMPANY_DATA_SUCCESS:
      return Object.assign({}, state, {
        companyDataPending: false,
        companyData: action.payload,
      });
    case actions.GET_COMPANY_DATA_FAILED:
      return Object.assign({}, state, {
        companyDataPending: false,
        companyDataError: action.payload,
      });
    case actions.ADD_COMPANY_DATA_PENDING:
      return Object.assign({}, state, {companyDataPending: true});
    case actions.ADD_COMPANY_DATA_SUCCESS:
      return Object.assign({}, state, {
        companyDataPending: false,
        companyData: action.payload,
      });
    case actions.ADD_COMPANY_DATA_FAILED:
      return Object.assign({}, state, {
        companyDataPending: false,
        companyDataError: action.payload,
      });
    default:
      return state;
  }
};

export default graphReducer;
