import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ADMIN_PRODUCT_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_RESET,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_RESET,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_RESET,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_RESET,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    ALL_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_RESET,
    CLEAR_ERRORS,
} from "../constants/productConstants";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    state: { products: [] },
};

export const productsReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(ALL_PRODUCT_REQUEST, (state, action) => {
            return {
                loading: true,
                products: []
            }
        })
        .addCase(ADMIN_PRODUCT_REQUEST, (state, action) => {
            return {
                loading: true,
                products: []
            }
        })
        .addCase(ADMIN_PRODUCT_SUCCESS, (state, action) => {
            return {
                loading: false,
                products: action.payload,
            }
        })
        .addCase(ALL_PRODUCT_SUCCESS, (state, action) => {
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCount,
                resultPerPage: action.payload.resultPerPage,
                filteredProductsCount: action.payload.filteredProductsCount,
            };
        })
        .addCase(ALL_PRODUCT_FAIL, (state, action) => {
            console.log(action.payload);
            return {
                loading: false,
                error: action.payload,
            };
        })
        .addCase(ADMIN_PRODUCT_FAIL, (state, action) => {
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
    state: { products: {} },
};


export const newProductReducer = createReducer(initialState4, (builder) => {
    builder
        .addCase(NEW_PRODUCT_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(NEW_PRODUCT_SUCCESS, (state, action) => {
            return {
                loading: false,
                success: action.payload.success,
                product: action.payload.product,
            }
        })
        .addCase(NEW_PRODUCT_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })
        .addCase(NEW_PRODUCT_RESET, (state, action) => {
            return {
                ...state,
                success: false,
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
    state: { product: {} },
};

export const productDetailsReducer = createReducer(initialState1, (builder) => {
    builder
        .addCase(PRODUCT_DETAILS_REQUEST, (state, action) => {
            return {
                loading: true,
                ...state,
            }
        })
        .addCase(PRODUCT_DETAILS_SUCCESS, (state, action) => {
            return {
                loading: false,
                product: action.payload,
            };
        })
        .addCase(PRODUCT_DETAILS_FAIL, (state, action) => {
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
    state: {},
};

export const newReviewReducer = createReducer(initialState2, (builder) => {
    builder
        .addCase(NEW_REVIEW_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(NEW_REVIEW_SUCCESS, (state, action) => {
            return {
                loading: false,
                success: action.payload,
            };
        })
        .addCase(NEW_REVIEW_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        })
        .addCase(NEW_REVIEW_RESET, (state, action) => {
            return {
                ...state,
                success: false,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});

const initialState6 = {
    state: {
        reviews: []
    },
};

export const productReviewsReducer = createReducer(initialState6, (builder) => {
    builder
        .addCase(ALL_REVIEW_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(ALL_REVIEW_SUCCESS, (state, action) => {
            return {
                loading: false,
                reviews: action.payload,
            };
        })
        .addCase(ALL_REVIEW_FAIL, (state, action) => {
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
        })


});

const initialState5 = {
    state: {},
};

export const reviewReducer = createReducer(initialState5, (builder) => {
    builder
        .addCase(DELETE_REVIEW_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(DELETE_REVIEW_SUCCESS, (state, action) => {
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        })
        .addCase(DELETE_REVIEW_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        })
        .addCase(DELETE_REVIEW_RESET, (state, action) => {
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

const initialState3 = {
    state: {},
};

export const productReducer = createReducer(initialState3, (builder) => {
    builder
        .addCase(DELETE_PRODUCT_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(UPDATE_PRODUCT_REQUEST, (state, action) => {
            return {
                ...state,
                loading: true,
            }
        })
        .addCase(DELETE_PRODUCT_SUCCESS, (state, action) => {
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        })
        .addCase(UPDATE_PRODUCT_SUCCESS, (state, action) => {
            return {
                ...state,
                loading: false,
                isUpdated: action.payload,
            };
        })
        .addCase(DELETE_PRODUCT_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        })
        .addCase(UPDATE_PRODUCT_FAIL, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        })
        .addCase(DELETE_PRODUCT_RESET, (state, action) => {
            return {
                ...state,
                isDeleted: false,
            };
        })
        .addCase(UPDATE_PRODUCT_RESET, (state, action) => {
            return {
                ...state,
                isUpdated: false,
            };
        })
        .addCase(CLEAR_ERRORS, (state, action) => {
            return {
                ...state,
                error: null,
            };
        })


});


