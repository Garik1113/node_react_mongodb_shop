import { combineReducers } from 'redux';
import { addedProduct } from './productReducers';
import { errors } from './errorReducers';
import { signupUser, loginUser } from './userReducers';
export default combineReducers({
  addedProduct,
  errors,
  signupUser,
  loginUser,
});
