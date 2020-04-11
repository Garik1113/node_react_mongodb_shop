import { combineReducers } from "redux";
import { addedProduct } from "./productReducers";
import { errors } from "./errorReducers";
export default combineReducers({
  addedProduct,
  errors,
});
