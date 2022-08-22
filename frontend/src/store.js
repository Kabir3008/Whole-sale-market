import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducers";

import { authReducer } from "./reducers/userReducers";
import { newOrderReducer } from "./reducers/orderReducers";


import {
    productsReducer,
    productDetailsReducer,
    newReviewReducer



} from "./reducers/productReducers";





const reducer = combineReducers({
    products: productsReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    auth: authReducer,
    newOrder: newOrderReducer,
    newReview: newReviewReducer

});


//page on kolre ki thakbe.like cart on korle cart items dekhte para.The createStore method can accept an optional preloadedState value as its second argument.Reducers can also specify an initial value by looking for an incoming state argument that is undefined
let initialState = {
    cart: {
        cartItems: localStorage.getItem("cartItems")
            ? JSON.parse(localStorage.getItem("cartItems"))
            : [],
        shippingInfo: localStorage.getItem("shippingInfo")
            ? JSON.parse(localStorage.getItem("shippingInfo"))
            : {},
    },
}

const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))  //redux er custom functionality baray
);

export default store;
