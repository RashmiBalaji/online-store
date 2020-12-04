import { actionTypes } from "../actions/cartactions.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productInCart = state.cart.find((p) => p.id === action.product.id);
      if (!productInCart) {
        return {
          ...state,
          cart: [...state.cart, action.product],
        };
      } else {
        action.product.quantity += 1;
        return {
          ...state,
        };
      }

    case actionTypes.REMOVE_FROM_CART:
      const itemToRemove = state.cart.find((p) => p.id === action.product.id);
      const filteredItems = state.cart.filter((p) => p.id !== itemToRemove.id);
      return {
        ...state,
        cart: [...filteredItems],
      };
    case actionTypes.PLACE_ORDER:
      const orderedItems = state.cart.slice(0);
      if (orderedItems.length > 0) {
        return {
          ...state,
          cart: [],
          orders: [...orderedItems],
        };
      } else {
        return {
          ...state,
        };
      }

    default:
      return state;
  }
};
