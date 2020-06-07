import * as actions from '../../actionTypes';
import Axios from 'axios';
import {API_URL, DB_URL} from '../../../utils/constants';

export const getGraphDataConfirmed = async (dispatch, getState) => {
  return new Promise(async (resolve, reject) => {
    dispatch({type: actions.SET_ERROR, payload: false});
    dispatch({type: actions.GET_GRAPH_DATA_CONFIRMED_PENDING});
    dispatch({type: actions.SET_LOADER, payload: true});
    const headers = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await Axios.get(`${API_URL}/api/day_wise_confirmed`, headers);
      dispatch({
        type: actions.GET_GRAPH_DATA_CONFIRMED_SUCCESS,
        payload: res.data,
      });
      dispatch({type: actions.SET_LOADER, payload: false});
      resolve(res.data);
    } catch (err) {
      dispatch({type: actions.GET_GRAPH_DATA_CONFIRMED_FAILED, payload: err});
      dispatch({type: actions.SET_LOADER, payload: false});
      dispatch({type: actions.SET_ERROR, payload: true});
      reject(err);
    }
  });
};

export const getAllGraphData = async (dispatch) => {
  dispatch({type: actions.SET_ERROR, payload: false});
  dispatch({type: actions.GET_GRAPH_DATA_ALL_PENDING});
  dispatch({type: actions.SET_LOADER, payload: true});
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get(`${API_URL}/analyse`, headers);
    dispatch({
      type: actions.GET_GRAPH_DATA_ALL_SUCCESS,
      payload: res.data,
    });
    dispatch({type: actions.SET_LOADER, payload: false});
  } catch (err) {
    dispatch({type: actions.GET_GRAPH_DATA_ALL_FAILED, payload: err});
    dispatch({type: actions.SET_LOADER, payload: false});
    dispatch({type: actions.SET_ERROR, payload: true});
  }
};

export const getAllStudentData = async (dispatch) => {
  dispatch({type: actions.SET_ERROR, payload: false});
  dispatch({type: actions.GET_STUDENT_DATA_PENDING});
  dispatch({type: actions.SET_LOADER, payload: true});
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get(`${DB_URL}/student/getall`, headers);
    dispatch({
      type: actions.GET_STUDENT_DATA_SUCCESS,
      payload: res.data,
    });
    dispatch({type: actions.SET_LOADER, payload: false});
  } catch (err) {
    dispatch({type: actions.GET_STUDENT_DATA_FAILED, payload: err});
    dispatch({type: actions.SET_LOADER, payload: false});
    dispatch({type: actions.SET_ERROR, payload: true});
  }
};
export const addStudentData = (form) => async (dispatch) => {
  dispatch({type: actions.SET_ERROR, payload: false});
  dispatch({type: actions.ADD_STUDENT_DATA_PENDING});
  dispatch({type: actions.SET_LOADER, payload: true});
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await Axios.post(`${DB_URL}/student/add`, form, headers);
    dispatch({
      type: actions.ADD_STUDENT_DATA_SUCCESS,
      payload: res.data,
    });
    dispatch({type: actions.SET_LOADER, payload: false});
  } catch (err) {
    dispatch({type: actions.ADD_STUDENT_DATA_FAILED, payload: err});
    dispatch({type: actions.SET_LOADER, payload: false});
    dispatch({type: actions.SET_ERROR, payload: true});
  }
};

export const getAllCompanyData = async (dispatch) => {
  dispatch({type: actions.SET_ERROR, payload: false});
  dispatch({type: actions.GET_COMPANY_DATA_PENDING});
  dispatch({type: actions.SET_LOADER, payload: true});
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get(`${DB_URL}/company/getall`, headers);
    dispatch({
      type: actions.GET_COMPANY_DATA_SUCCESS,
      payload: res.data,
    });
    dispatch({type: actions.SET_LOADER, payload: false});
  } catch (err) {
    dispatch({type: actions.GET_COMPANY_DATA_FAILED, payload: err});
    dispatch({type: actions.SET_LOADER, payload: false});
    dispatch({type: actions.SET_ERROR, payload: true});
  }
};
export const addCompanyData = (form) => async (dispatch) => {
  dispatch({type: actions.SET_ERROR, payload: false});
  dispatch({type: actions.ADD_COMPANY_DATA_PENDING});
  dispatch({type: actions.SET_LOADER, payload: true});
  const headers = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  try {
    const res = await Axios.post(`${DB_URL}/company/add`, form, headers);
    dispatch({
      type: actions.ADD_COMPANY_DATA_SUCCESS,
      payload: res.data,
    });
    dispatch({type: actions.SET_LOADER, payload: false});
  } catch (err) {
    dispatch({type: actions.ADD_COMPANY_DATA_FAILED, payload: err});
    dispatch({type: actions.SET_LOADER, payload: false});
    dispatch({type: actions.SET_ERROR, payload: true});
  }
};
