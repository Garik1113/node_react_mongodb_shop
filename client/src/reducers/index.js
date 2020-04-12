import { combineReducers } from 'redux';
import { addedProduct } from './productReducers';
import { errors } from './errorReducers';
import { signupUser } from './userReducers';
export default combineReducers({
  addedProduct,
  errors,
  signupUser,
});
