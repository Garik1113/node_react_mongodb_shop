import {
  ADD_PRODUCT_TO_SHOPPING_CART,
  ADD_PRODUCT_TO_SHOPPING_CART_FAILED,
} from "../types";

const initialState = [];

export const shoppingCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_SHOPPING_CART:
      return [...state, action.payload];
    case ADD_PRODUCT_TO_SHOPPING_CART_FAILED:
      return state;
    default:
      return state;
  }
};
