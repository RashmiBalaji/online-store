import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createStore } from 'redux'
import { getState , useDispatch, useSelector } from 'react-redux';
import CartPage from '../CartPage/cartpage.js'
import store from '../../store/configureStore.js'
import Button from "@material-ui/core/Button";
import './orderpage.css'
import { connect } from 'react-redux'
import { addProductToCart } from "../../actions/cartactions.js"



function OrderPage(props) {

console.log(store,"store from orders page")
console.log(props,"props from orderpage")
const cartdata = useSelector((store) => store.cart)
console.log(cartdata,"cart data using use selector from orders page")
const data = useSelector((store) => store.orders)
console.log(data,"order data using use selector from orders page")

const totalPrice = data.reduce((a,b)=>a+(b.price*b.quantity),0)


  const inventoryList = data.map((inventory) => (
    <>
      <li className="individual-order">
          <div className="left-cart">
        <img src={inventory.image} alt="pics" width="100" height="100" />
        </div>
        <div className="right-cart">
        <p>{inventory.title}</p>
        <p>Quantity: {inventory.quantity}</p>
        <p>{`${inventory.price} Euros`}</p>
        </div>
      </li>
    </>
  ));

  return (
    <>
      
    


      <div style={{paddingTop:"10vh", marginLeft:"10vh"}}>
        <h4>Your order for the following items are placed:</h4>
        {inventoryList.length>0 && (
            <>
            <div className="container-cart">
            <ul className="order-list">{inventoryList}</ul>
            </div>
            <h3>Your total order value: {totalPrice} Euros</h3>
            </>
        )
        }
             {inventoryList.length===0 && (
            <h3>No orders placed yet</h3>
        )
        }
         <Button variant="contained" href="/" size="small" color="primary">
            BACK TO HOMEPAGE
          </Button>
       
     </div>
    </>
  );
}

// const mapStateToProps = state => {
//     return {
//       products: state.products
//     };
//   };
  
//   const mapDispatchToProps = dispatch => {
//     return {
//       addProduct: product => dispatch(addProductToCart(product))
//     };
//   };
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(OrderPage);

export default OrderPage;



