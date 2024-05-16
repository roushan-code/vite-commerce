import {createAction } from "@reduxjs/toolkit";

export const LOGIN_REQUEST = createAction('LOGIN_REQUEST');
export const LOGIN_SUCCESS = createAction('LOGIN_SUCCESS');
export const LOGIN_FAIL = createAction('LOGIN_FAIL');

export const REGISTER_USER_REQUEST = createAction('REGISTER_USER_REQUEST');
export const REGISTER_USER_SUCCESS = createAction('REGISTER_USER_SUCCESS');
export const REGISTER_USER_FAIL = createAction('REGISTER_USER_FAIL');

export const LOAD_USER_REQUEST = createAction('LOAD_USER_REQUEST');
export const LOAD_USER_SUCCESS = createAction('LOAD_USER_SUCCESS');
export const LOAD_USER_FAIL = createAction('LOAD_USER_FAIL');

export const LOGOUT_SUCCESS = createAction('LOGOUT_SUCCESS');
export const LOGOUT_FAIL = createAction('LOGOUT_FAIL');

export const UPDATE_PROFILE_REQUEST = createAction('UPDATE_PROFILE_REQUEST');
export const UPDATE_PROFILE_SUCCESS = createAction('UPDATE_PROFILE_SUCCESS');
export const UPDATE_PROFILE_RESET = createAction('UPDATE_PROFILE_RESET');
export const UPDATE_PROFILE_FAIL = createAction('UPDATE_PROFILE_FAIL');

export const UPDATE_PASSWORD_REQUEST = createAction('UPDATE_PASSWORD_REQUEST');
export const UPDATE_PASSWORD_SUCCESS = createAction('UPDATE_PASSWORD_SUCCESS');
export const UPDATE_PASSWORD_RESET = createAction('UPDATE_PASSWORD_RESET');
export const UPDATE_PASSWORD_FAIL = createAction('UPDATE_PASSWORD_FAIL');

export const FORGOT_PASSWORD_REQUEST = createAction('FORGOT_PASSWORD_REQUEST');
export const FORGOT_PASSWORD_SUCCESS = createAction('FORGOT_PASSWORD_SUCCESS');
export const FORGOT_PASSWORD_FAIL = createAction('FORGOT_PASSWORD_FAIL');

export const RESET_PASSWORD_REQUEST = createAction('RESET_PASSWORD_REQUEST');
export const RESET_PASSWORD_SUCCESS = createAction('RESET_PASSWORD_SUCCESS');
export const RESET_PASSWORD_FAIL = createAction('RESET_PASSWORD_FAIL');

export const ALL_USERS_REQUEST = createAction('ALL_USERS_REQUEST');
export const ALL_USERS_SUCCESS = createAction('ALL_USERS_SUCCESS');
export const ALL_USERS_FAIL = createAction('ALL_USERS_FAIL');

export const USER_DETAILS_REQUEST = createAction('USER_DETAILS_REQUEST');
export const USER_DETAILS_SUCCESS = createAction('USER_DETAILS_SUCCESS');
export const USER_DETAILS_FAIL = createAction('USER_DETAILS_FAIL');

export const UPDATE_USER_REQUEST = createAction('UPDATE_USER_REQUEST');
export const UPDATE_USER_SUCCESS = createAction('UPDATE_USER_SUCCESS');
export const UPDATE_USER_RESET = createAction('UPDATE_USER_RESET');
export const UPDATE_USER_FAIL = createAction('UPDATE_USER_FAIL');

export const DELETE_USER_REQUEST = createAction('DELETE_USER_REQUEST');
export const DELETE_USER_SUCCESS = createAction('DELETE_USER_SUCCESS');
export const DELETE_USER_FAIL = createAction('DELETE_USER_FAIL');
export const DELETE_USER_RESET = createAction('DELETE_USER_RESET');

export const CLEAR_ERRORS = createAction('CLEAR_ERRORS');