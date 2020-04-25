import {
  ADD_PRODUCT_TO_SHOPPING_CART,
  ADD_PRODUCT_TO_SHOPPING_CART_FAILED,
  GET_CART_PRODUCTS,
} from "../types";

const initialState = [];

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_SHOPPING_CART:
      return [...state, action.payload];
    case ADD_PRODUCT_TO_SHOPPING_CART_FAILED:
      return state;
    case GET_CART_PRODUCTS:
      return action.payload;
    default:
      return state;
  }
};
