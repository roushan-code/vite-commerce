import { createReducer } from "@reduxjs/toolkit";
import {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    MY_ORDERS_REQUEST,
    MY_ORDERS_SUCCESS,
    MY_ORDERS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS,
    ORDER_DETAILS_FAIL,
    ALL_ORDERS_REQUEST,
    ALL_ORDERS_SUCCESS,
    ALL_ORDERS_FAIL,
    UPDATE_ORDER_REQUEST,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_FAIL,
    UPDATE_ORDER_RESET,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAIL,
    DELETE_ORDER_RESET,
    CLEAR_ERRORS,
} from "../constants/orderContants";

const initialState = {
    state: {},
};

export const newOrderReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(CREATE_ORDER_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(CREATE_ORDER_SUCCESS, (state, action) => {
            return {
                loading: false,
                order: action.payload,
            };
        })
        .addCase(CREATE_ORDER_FAIL, (state, action) => {
            return {
                loading: false,
                error: action.payload,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});
const initialState1 = {
    state: {
        orders: [],
    },
};

export const myOrdersReducer = createReducer(initialState1, (builder) => {
    builder
        .addCase(MY_ORDERS_REQUEST, (state, action) => {
            return {
                loading: true,
            }
        })
        .addCase(MY_ORDERS_SUCCESS, (state, action) => {
            return {
                loading: false,
                orders: action.payload,
            };
        })
        .addCase(MY_ORDERS_FAIL, (state, action) => {
            return {
                loading: false,
                error: action.payload,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});


const initialState2 = {
    state: {
        orders: {},
    },
};

export const orderDetailsReducer = createReducer(initialState2, (builder) => {
    builder
        .addCase(ORDER_DETAILS_REQUEST, (state, action) => {
            return {
                loading: true,
            }
        })
        .addCase(ORDER_DETAILS_SUCCESS, (state, action) => {
            return {
                loading: false,
                order: action.payload,
            };
        })
        .addCase(ORDER_DETAILS_FAIL, (state, action) => {
            return {
                loading: false,
                error: action.payload,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});
const initialState3 = {
    state: {
        orders: {},
    },
};

export const allOrdersReducer = createReducer(initialState3, (builder) => {
    builder
        .addCase(ALL_ORDERS_REQUEST, (state, action) => {
            return {
                loading: true,
            }
        })
        .addCase(ALL_ORDERS_SUCCESS, (state, action) => {
            return {
                loading: false,
                orders: action.payload,
            };
        })
        .addCase(ALL_ORDERS_FAIL, (state, action) => {
            return {
                loading: false,
                error: action.payload,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});
const initialState4 = {
    state: {
        orders: {},
    },
};

export const orderReducer = createReducer(initialState4, (builder) => {
    builder
        .addCase(UPDATE_ORDER_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(DELETE_ORDER_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            };
        })
        .addCase(UPDATE_ORDER_SUCCESS, (state, action) => {
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        })
        .addCase(DELETE_ORDER_SUCCESS, (state, action) => {
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        })
        .addCase(UPDATE_ORDER_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        })
        .addCase(DELETE_ORDER_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        })
        .addCase(UPDATE_ORDER_RESET, (state, action) => {
            return {
                ...state,
                isUpdated: false,
            };
        })
        .addCase(DELETE_ORDER_RESET, (state, action) => {
            return {
                ...state,
                isDeleted: false,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});