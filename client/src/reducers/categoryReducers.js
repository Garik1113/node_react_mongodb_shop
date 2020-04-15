import { ADD_NEW_CATEGORY, GET__ALL_CATEGORIES } from "../types";

const initialState = [];

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET__ALL_CATEGORIES:
      return action.payload;
    case ADD_NEW_CATEGORY:
      return [...state, action.payload];
    default:
      return state;
  }
};
