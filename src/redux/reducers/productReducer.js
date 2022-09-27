import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [],
  // product: {},
};

export const productReducer = (state = initialState, action) => {
  console.log("initialState", initialState, action.payload);
  switch (action.type) {
    case ActionTypes.SET_PRODUCTS: {
      return { ...state, products: action.payload.products };
    }

    default:
      return state;
  }
};

export const selectedProduct = (state = {}, action) => {
  console.log("action", action);
  switch (action.type) {
    case ActionTypes.SELECTED_PRODUCT: {
      return { ...state, ...action.payload };
    }
    case ActionTypes.REMOVE_SELECTED_PRODUCT: {
      return {};
    }

    default:
      return state;
  }
};
