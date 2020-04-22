import { GET_ERRORS, CLEAR_ERRORS } from "../types";

const initialState = {
  data: {},
  status: "",
  hasErrors: false,
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        hasErrors: true,
      };
    case CLEAR_ERRORS:
      return initialState;
    default:
      return state;
  }
};
