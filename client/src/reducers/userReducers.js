import {
  ADD_SIGNUP_NAME,
  ADD_SIGNUP_SURNAME,
  ADD_SIGNUP_AGE,
  ADD_SIGNUP_EMAIL,
  ADD_SIGNUP_PASSWORD,
  ADD_SIGNUP_CONFIRM_PASSWORM,
  ADD_LOGIN_EMAIL,
  ADD_LOGIN_PASSWORD,
} from '../types';

const signupInitialState = {
  name: '',
  surname: '',
  age: '',
  email: '',
  password: '',
  confirmPassword: '',
};

export const signupUser = (state = signupInitialState, action) => {
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

const loginInitialState = {
  email: '',
  password: '',
};

export const loginUser = (state = loginInitialState, action) => {
  switch (action.type) {
    case ADD_LOGIN_EMAIL:
      return { ...state, email: action.payload };
    case ADD_LOGIN_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};
