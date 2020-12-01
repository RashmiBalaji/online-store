import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createStore } from 'redux'
import { getState , useDispatch, useSelector } from 'react-redux';
import CartPage from '../CartPage/cartpage.js'
import store from '../../store/configureStore.js'
import { connect } from 'react-redux'
import { addProductToCart } from "../../actions/cartactions.js"



function OrderPage(props) {

console.log(store,"store from orders page")
console.log(props,"props from orderpage")
const data = useSelector((store) => store.cart)
console.log(data,"cart data using use selector from orders page")



  const inventoryList = data.map((inventory) => (
    <>
      <li className="item-tile">
        <img src={inventory.image} alt="pics" width="200" height="150" />
        <h4>{inventory.title}</h4>
        <h3>{`${inventory.price} Euros`}</h3>
       
      </li>
    </>
  ));

  return (
    <>
      <div>
    


         
        <h4>Your order for the following items are placed:</h4>
            <ul className="inventory-list">{inventoryList}</ul>
        
        <Link
          to={{ pathname: "/"}}
        >
          <button>Back to Home</button>
        </Link>
     </div>
    </>
  );
}

const mapStateToProps = state => {
    return {
      products: state.products
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      addProduct: product => dispatch(addProductToCart(product))
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OrderPage);



