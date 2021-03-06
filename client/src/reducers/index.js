import { combineReducers } from "redux";
import {
  addedProduct,
  topProducts,
  productPage,
  searchingProducts,
  productsByCatName,
} from "./productReducers";
import { categories } from "./categoryReducers";
import { errors } from "./errorReducers";
import { user } from "./userReducers";
import { shoppingCart } from "./shoppingCart";
export default combineReducers({
  addedProduct,
  errors,
  user,
  topProducts,
  productPage,
  searchingProducts,
  categories,
  productsByCatName,
  shoppingCart,
});
