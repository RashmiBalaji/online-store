// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { createStore } from 'redux'
// import { getState , useDispatch } from 'react-redux';
// import "./homepage.css";
// import CartPage from '../components/CartPage/cartpage.js'
// import db from '../mockdata.js'

//import initialState from '../reducers/reducers.js'
import { useSelector } from 'react-redux'
//import store from '../store/configureStore.js'

import { actionTypes } from '../actions/cartactions.js'



 
//function CartReducer (state=[], action) {

    // switch (action.type) {
    //     case 'cart/added':
    //         return { ...state,inventory }
    //         case 'cart/removed':
    //             const filteredItems = state.filter((item) => item.id !== inventory.id)
    //              return {...filteredItems}
    //              default:
                     //return state

    //}

//     if(action.type === actionTypes.ADD_TO_CART){
//         let addedItem = state.items.find(item=> item.id === action.product.id)
//         //check if the action id exists in the addedItems
//        let existed_item= state.addedItems.find(item=> action.product.id === item.id)
//        if(existed_item)
//        {
//           addedItem.quantity += 1 
//            return{
//               ...state,
//                //total: state.total + addedItem.price 
//                 }
//       }
//        else{
//           addedItem.quantity = 1;
//           //calculating the total
//           //let newTotal = state.total + addedItem.price 
          
//           return{
//               ...state,
//               addedItems: [...state.addedItems, addedItem],
//               //total : newTotal
//           }
          
//       }
//   }
//   else{
//       return state
//   }

const updateQuantity = p =>
  p.quantity ? { ...p, quantity: p.quantity + 1 } : { ...p, quantity: 2 };

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    //const data = useSelector((store) => store.cart)
    console.log(state,"from reducer add to cart")
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const productInCart = state.cart.find(p => p.id === action.product.id);
      if (!productInCart) {
          console.log(action.product,"product being added to cart")
          return {
              ...state,
              cart:[...state.cart, action.product]
          }
      }
      return state.cart.map(p => {
        if (p.id === action.product.id) {
          return updateQuantity(p);
        }
        return p;
      });
    case actionTypes.REMOVE_FROM_CART:
        const itemToRemove = state.cart.find(p => p.id === action.product.id)
        const filteredItems = state.cart.filter(p=> p.id !== itemToRemove.id)
      return {
          ...state,
          cart:[...filteredItems]
        // ...state.slice(0, action.index),
        // ...state.slice(action.index + 1)
  };
    default:
      return state;
  }
};

    


//const store = createStore(cartReducer)


  
//export default CartReducer;
