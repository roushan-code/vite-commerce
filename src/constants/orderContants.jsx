import { createAction } from "@reduxjs/toolkit";

export const CREATE_ORDER_REQUEST = createAction('CREATE_ORDER_REQUEST');
export const CREATE_ORDER_SUCCESS = createAction('CREATE_ORDER_SUCCESS');
export const CREATE_ORDER_FAIL = createAction('CREATE_ORDER_FAIL');

export const MY_ORDERS_REQUEST = createAction('MY_ORDERS_REQUEST');
export const MY_ORDERS_SUCCESS = createAction('MY_ORDERS_SUCCESS');
export const MY_ORDERS_FAIL = createAction('MY_ORDERS_FAIL');

export const ALL_ORDERS_REQUEST = createAction('ALL_ORDERS_REQUEST');
export const ALL_ORDERS_SUCCESS = createAction('ALL_ORDERS_SUCCESS');
export const ALL_ORDERS_FAIL = createAction('ALL_ORDERS_FAIL');

export const UPDATE_ORDER_REQUEST = createAction('UPDATE_ORDER_REQUEST');
export const UPDATE_ORDER_SUCCESS = createAction('UPDATE_ORDER_SUCCESS');
export const UPDATE_ORDER_RESET = createAction('UPDATE_ORDER_RESET');
export const UPDATE_ORDER_FAIL = createAction('UPDATE_ORDER_FAIL');

export const DELETE_ORDER_REQUEST = createAction('DELETE_ORDER_REQUEST');
export const DELETE_ORDER_SUCCESS = createAction('DELETE_ORDER_SUCCESS');
export const DELETE_ORDER_RESET = createAction('DELETE_ORDER_RESET');
export const DELETE_ORDER_FAIL = createAction('DELETE_ORDER_FAIL');

export const ORDER_DETAILS_REQUEST = createAction('ORDER_DETAILS_REQUEST');
export const ORDER_DETAILS_SUCCESS = createAction('ORDER_DETAILS_SUCCESS');
export const ORDER_DETAILS_FAIL = createAction('ORDER_DETAILS_FAIL');

export const CLEAR_ERRORS = createAction('CLEAR_ERRORS');