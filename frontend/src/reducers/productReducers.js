import {
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_FAIL,
    PRODUCTS_DETAILS_FAIL,
    PRODUCTS_DETAILS_REQUEST, PRODUCTS_DETAILS_SUCCESS,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,

    CLEAR_ERRORS

} from '../constants/productConstants.js';

export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case ALL_PRODUCTS_REQUEST:

            return {
                loading: true,
                products: []
            }

        case ALL_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
                productCount: action.payload.productCount,
                resPerPage: action.payload.resPerPage

            }



        case ALL_PRODUCTS_FAIL:
            // case ADMIN_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload  //error msg ta show korbe
            }
        //When you clear errors, on reducer, you set error to null so the useSelector return null to the variable error and so the error.
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}


export const productDetailsReducer = (state = { product: {} }, action) => {
    switch (action.type) {
        case PRODUCTS_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case PRODUCTS_DETAILS_SUCCESS:
            return {
                loading: false,
                product: action.payload,

            }
        case PRODUCTS_DETAILS_FAIL:
            return {
                ...state,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}

export const newReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case NEW_REVIEW_REQUEST:
            return {
                ...state,
                loading: true
            }
        case NEW_REVIEW_SUCCESS:
            return {
                loading: false,
                success: action.payload
            }
        case NEW_REVIEW_FAIL:
            return {
                ...state,
                error: action.payload
            }
        case NEW_REVIEW_RESET:
            return {
                ...state,
                success: false
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}