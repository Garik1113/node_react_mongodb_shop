import { combineReducers } from "redux";
import {
  addedProduct,
  topProducts,
  productPage,
  searchingProducts,
} from "./productReducers";
import { categories } from "./categoryReducers";
import { errors } from "./errorReducers";
import { signupUser, loginUser } from "./userReducers";
export default combineReducers({
  addedProduct,
  errors,
  signupUser,
  loginUser,
  topProducts,
  productPage,
  searchingProducts,
  categories,
});
