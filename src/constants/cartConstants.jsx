import {createAction } from "@reduxjs/toolkit";

export const ADD_TO_CART = createAction("ADD_TO_CART");
export const REMOVE_CART_ITEM = createAction("REMOVE_CART_ITEM");
export const SAVE_SHIPPING_INFO = createAction("SAVE_SHIPPING_INFO");