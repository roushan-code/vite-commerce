import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  CLEAR_ERRORS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_RESET,
  UPDATE_PROFILE_FAIL,
  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_RESET,
  UPDATE_PASSWORD_FAIL,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,
  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_RESET,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_RESET,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
} from "../constants/userConstants";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
  error: null
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(LOGIN_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    })
    .addCase(LOGIN_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    })
    .addCase(LOGIN_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    })
    .addCase(REGISTER_USER_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    })
    .addCase(REGISTER_USER_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    })
    .addCase(REGISTER_USER_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    })
    .addCase(LOAD_USER_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    })
    .addCase(LOAD_USER_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    })
    .addCase(LOGOUT_SUCCESS, (state, action) => {
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
      };
    })
    .addCase(LOAD_USER_FAIL, (state, action) => {
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    })
    .addCase(LOGOUT_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(CLEAR_ERRORS, (state, action) => {
      return {
        ...state,
        error: null,
      };
    });
});

// Profile Reducer
export const profileReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(UPDATE_PROFILE_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(UPDATE_PROFILE_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    })
    .addCase(UPDATE_PROFILE_RESET, (state) => {
      return {
        ...state,
        isUpdated: false,
      };
    })
    .addCase(UPDATE_PROFILE_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(UPDATE_PASSWORD_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(UPDATE_USER_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(DELETE_USER_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
      };
    })
    .addCase(UPDATE_PASSWORD_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    })
    .addCase(UPDATE_USER_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    })
    .addCase(DELETE_USER_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };
    })
    .addCase(UPDATE_PASSWORD_RESET, (state) => {
      return {
        ...state,
        isUpdated: false,
      };
    })
    .addCase(UPDATE_USER_RESET, (state) => {
      return {
        ...state,
        isUpdated: false,
      };
    })
    .addCase(DELETE_USER_RESET, (state) => {
      return {
        ...state,
        isDeleted: false,
      };
    })
    .addCase(UPDATE_PASSWORD_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(UPDATE_USER_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(DELETE_USER_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(CLEAR_ERRORS, (state, action) => {
      return {
        ...state,
        error: null,
      };
    });

});

// Forgot Password
export const forgotPasswordReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(FORGOT_PASSWORD_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    })
    .addCase(RESET_PASSWORD_REQUEST, (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    })
    .addCase(FORGOT_PASSWORD_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        message: action.payload,
      };
    })
    .addCase(RESET_PASSWORD_SUCCESS, (state, action) => {
      return {
        ...state,
        loading: false,
        success: action.payload,
      };
    })
    .addCase(FORGOT_PASSWORD_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(RESET_PASSWORD_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    .addCase(CLEAR_ERRORS, (state, action) => {
      return {
        ...state,
        error: null,
      };
    });

});


export const allUsersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(ALL_USERS_REQUEST, (state,action) => {
      return {
        ...state,
        loading: true,
        
      };
    })
    .addCase(ALL_USERS_SUCCESS, (state,action) => {
      return {
        ...state,
        loading: true,
        users: action.payload,
      };
    })
    .addCase(ALL_USERS_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    
    .addCase(CLEAR_ERRORS, (state, action) => {
      return {
        ...state,
        error: null,
      };
    });

});



export const userDetailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(USER_DETAILS_REQUEST, (state,action) => {
      return {
        ...state,
        loading: true,
        
      };
    })
    .addCase(USER_DETAILS_SUCCESS, (state,action) => {
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    })
    .addCase(USER_DETAILS_FAIL, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    })
    
    .addCase(CLEAR_ERRORS, (state, action) => {
      return {
        ...state,
        error: null,
      };
    });

});