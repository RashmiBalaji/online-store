import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createStore } from 'redux'
import { getState , useDispatch, useSelector } from 'react-redux';
import CartPage from '../CartPage/cartpage.js'
import store from '../../store/configureStore.js'
import Button from "@material-ui/core/Button";
import { connect } from 'react-redux'
import { addProductToCart } from "../../actions/cartactions.js"



function OrderPage(props) {

console.log(store,"store from orders page")
console.log(props,"props from orderpage")
const cartdata = useSelector((store) => store.cart)
console.log(cartdata,"cart data using use selector from orders page")
const data = useSelector((store) => store.orders)
console.log(data,"order data using use selector from orders page")



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
      
    


      <div style={{paddingTop:"10vh", marginLeft:"10vh"}}>
        <h4>Your order for the following items are placed:</h4>
        {inventoryList.length>0 && (
            <ul className="inventory-list">{inventoryList}</ul>
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



