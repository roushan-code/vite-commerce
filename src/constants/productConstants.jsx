import {createAction } from "@reduxjs/toolkit";

export const ALL_PRODUCT_REQUEST = createAction('ALL_PRODUCT_REQUEST');
export const ALL_PRODUCT_SUCCESS = createAction('ALL_PRODUCT_SUCCESS');
export const ALL_PRODUCT_FAIL = createAction('ALL_PRODUCT_FAIL');

export const ADMIN_PRODUCT_REQUEST = createAction('ADMIN_PRODUCT_REQUEST');
export const ADMIN_PRODUCT_SUCCESS = createAction('ADMIN_PRODUCT_SUCCESS');
export const ADMIN_PRODUCT_FAIL = createAction('ADMIN_PRODUCT_FAIL');

export const PRODUCT_DETAILS_REQUEST = createAction('PRODUCT_DETAILS_REQUEST');
export const PRODUCT_DETAILS_SUCCESS = createAction('PRODUCT_DETAILS_SUCCESS');
export const PRODUCT_DETAILS_FAIL = createAction('PRODUCT_DETAILS_FAIL');

export const NEW_PRODUCT_REQUEST = createAction('NEW_PRODUCT_REQUEST');
export const NEW_PRODUCT_SUCCESS = createAction('NEW_PRODUCT_SUCCESS');
export const NEW_PRODUCT_RESET = createAction('NEW_PRODUCT_RESET');
export const NEW_PRODUCT_FAIL = createAction('NEW_PRODUCT_FAIL');

export const UPDATE_PRODUCT_REQUEST = createAction('UPDATE_PRODUCT_REQUEST');
export const UPDATE_PRODUCT_SUCCESS = createAction('UPDATE_PRODUCT_SUCCESS');
export const UPDATE_PRODUCT_RESET = createAction('UPDATE_PRODUCT_RESET');
export const UPDATE_PRODUCT_FAIL = createAction('UPDATE_PRODUCT_FAIL');

export const DELETE_PRODUCT_REQUEST = createAction('DELETE_PRODUCT_REQUEST');
export const DELETE_PRODUCT_SUCCESS = createAction('DELETE_PRODUCT_SUCCESS');
export const DELETE_PRODUCT_RESET = createAction('DELETE_PRODUCT_RESET');
export const DELETE_PRODUCT_FAIL = createAction('DELETE_PRODUCT_FAIL');

export const NEW_REVIEW_REQUEST = createAction('NEW_REVIEW_REQUEST');
export const NEW_REVIEW_SUCCESS = createAction('NEW_REVIEW_SUCCESS');
export const NEW_REVIEW_RESET = createAction('NEW_REVIEW_RESET');
export const NEW_REVIEW_FAIL = createAction('NEW_REVIEW_FAIL');

export const ALL_REVIEW_REQUEST = createAction('ALL_REVIEW_REQUEST');
export const ALL_REVIEW_SUCCESS = createAction('ALL_REVIEW_SUCCESS');
export const ALL_REVIEW_FAIL = createAction('ALL_REVIEW_FAIL');

export const DELETE_REVIEW_REQUEST = createAction('DELETE_REVIEW_REQUEST');
export const DELETE_REVIEW_SUCCESS = createAction('DELETE_REVIEW_SUCCESS');
export const DELETE_REVIEW_RESET = createAction('DELETE_REVIEW_RESET');
export const DELETE_REVIEW_FAIL = createAction('DELETE_REVIEW_FAIL');

export const CLEAR_ERRORS = createAction('CLEAR_ERRORS');