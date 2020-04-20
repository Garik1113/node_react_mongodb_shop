import { GET_ERRORS, CLEAR_ERRORS } from '../types';

const initialState = {
  data: {},
  status: '',
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        data: {},
        status: '',
      };
    default:
      return state;
  }
};
