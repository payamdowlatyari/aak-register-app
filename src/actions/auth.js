import services from '../services/index';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
  } from "./types";
  
  export const register = (form_data) => (dispatch) => {
    return services.register(form_data).then(
      (response) => {
        dispatch({
          type: REGISTER_SUCCESS,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: response.data.message,
        });
  
      }).catch(error => {
        const message =
          (error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        dispatch({
          type: REGISTER_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
    });
  };
  
  export const login = (form_data) => (dispatch) => {
    return services.login(form_data).then(
      (data) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { user: data },
        });
  
        }).catch(error => {
        const message =
          ( error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
  
        dispatch({
          type: LOGIN_FAIL,
        });
  
        dispatch({
          type: SET_MESSAGE,
          payload: message,
        });
  
      });
  };
  
  export const logout = () => (dispatch) => {

    services.logout();
  
    dispatch({
      type: LOGOUT,
    });
  };

