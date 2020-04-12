import {
  ADD_SIGNUP_NAME,
  ADD_SIGNUP_SURNAME,
  ADD_SIGNUP_AGE,
  ADD_SIGNUP_EMAIL,
  ADD_SIGNUP_PASSWORD,
  ADD_SIGNUP_CONFIRM_PASSWORM,
} from '../types';

const initialState = {
  name: '',
  surname: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const signupUser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SIGNUP_NAME:
      return { ...state, name: action.payload };
    case ADD_SIGNUP_SURNAME:
      return { ...state, surname: action.payload };
    case ADD_SIGNUP_AGE:
      return { ...state, age: action.payload };
    case ADD_SIGNUP_EMAIL:
      return { ...state, email: action.payload };
    case ADD_SIGNUP_PASSWORD:
      return { ...state, password: action.payload };
    case ADD_SIGNUP_CONFIRM_PASSWORM:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};
