export const actionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    
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