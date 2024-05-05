// import {createStore,combineReducers,applyMiddleware} from "redux";
// import {thunk} from "redux-thunk"
// import {composeWithDevTools} from "redux-devtools-extension";

import { configureStore } from "@reduxjs/toolkit";
import { newProductReducer, newReviewReducer, productDetailsReducer, productReducer, productReviewsReducer, productsReducer, reviewReducer } from "./reducers/productReducer";
import { userReducer, profileReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import { allOrdersReducer, myOrdersReducer, newOrderReducer, orderDetailsReducer, orderReducer } from "./reducers/orderReducer";


// const reducer =  combineReducers({
//     products: productReducer,
//     productDetails: productDetailsReducer,
// });


// let initialState = {};
// const middleware = [thunk];

const store = configureStore({
    reducer: {
        products: productsReducer,
        productDetails: productDetailsReducer,
        user: userReducer,
        profile: profileReducer,
        forgotPassword: forgotPasswordReducer,
        cart: cartReducer,
        newOrder: newOrderReducer,
        myOrders: myOrdersReducer,
        orderDetails: orderDetailsReducer,
        newReview: newReviewReducer,
        order: orderReducer,
        allOrders: allOrdersReducer,
        allUsers: allUsersReducer,
        userDetails: userDetailsReducer,
        product: productReducer,
        newProduct: newProductReducer,
        productReviews: productReviewsReducer,
        review: reviewReducer,
    },

});


export default store;