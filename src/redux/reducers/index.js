import { combineReducers } from "redux";
import { productReducer, selectedProduct } from "./productReducer";

export const reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProduct,
});
