import {
  ADD_PRODUCT_TO_SHOPPING_CART,
  ADD_PRODUCT_TO_SHOPPING_CART_FAILED,
  GET_CART_PRODUCTS,
  INCREMENT_CART_PRODUCT_QUANTITY,
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
    case INCREMENT_CART_PRODUCT_QUANTITY:
      state = state.map((e) => {
        if (e.cart._id == action.payload.cart_id) {
          e.cart.quantity += action.payload.num;
        }
        return e;
      });

      return state;
    default:
      return state;
  }
};
