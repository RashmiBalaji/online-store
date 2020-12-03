export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    PLACE_ORDER:"PLACE_ORDER",
  };

export const addProductToCart = product => {
    return {
      type: actionTypes.ADD_TO_CART,
      product
    };
  };
  
  export const removeProductFromCart = product => {
    return {
      type: actionTypes.REMOVE_FROM_CART,
      product
    };
  };

  export const placeOrder = product => {
    return {
      type: actionTypes.PLACE_ORDER,
      product
    };
  };