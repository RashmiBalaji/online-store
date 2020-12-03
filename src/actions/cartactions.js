export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    UNDER_CHECKOUT:"UNDER_CHECKOUT",
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

  export const underCheckout = product => {
    return {
      type: actionTypes.UNDER_CHECKOUT,
      product
    };
  };

  export const placeOrder = product => {
    return {
      type: actionTypes.PLACE_ORDER,
      product
    };
  };