import { combineReducers, configureStore } from "@reduxjs/toolkit";
import product from "./reducers/product";
import user from "./reducers/user";
import buy from "./reducers/buy";
import allProduct from "./reducers/allProduct";


const rootReducer = combineReducers({
    product,
    user,
    buy,
    allProduct

})

export const store = configureStore({
    reducer: rootReducer,

})
