import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { createStore } from 'redux'
import { getState , useDispatch, useSelector } from 'react-redux';
import "./homepage.css";
import CartPage from '../CartPage/cartpage.js'
import store from '../../store/configureStore.js'
import { connect } from 'react-redux'
import { addProductToCart } from "../../actions/cartactions.js"



function HomePage(props) {
//   const [inventories, setInventories] = useState([]);
//   //const [cart, setCart] = useState([]);
//   const [click, setClick] = useState(false)

//   const initialState = {
//       cart: []
//   }

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) => setInventories(res));
//   }, []);

//   const dispatch = useDispatch()

//   function addToCart (inventory) {
//       console.log("item added to cart")
//       console.log(inventory)
//       setCart([...cart,inventory])
//   }

//   function cartView () {
//       setClick(true)
//   }

//   function removeItem (inventory) {
//     console.log("remove item clicked",cart)
//     const filteredItems = cart.filter((item) => item.id !==inventory.id)
//     console.log(filteredItems,"after remove click")
//     setCart([...filteredItems])
// }





//console.log("initial state",store.getState())

// store.dispatch({type: 'cart/added', payload: inventory})
// store.dispatch({type: 'cart/removed', payload: inventory})

//unsubscribe()

//const cartEl = document.getElementById('cart')

console.log(store,"store")
console.log(props,"props from homepage")
const data = useSelector((store) => store.inventories)
console.log(data,"data using use selector")



  const inventoryList = data.map((inventory) => (
    <>
      <li className="item-tile">
        <img src={inventory.image} alt="pics" width="200" height="150" />
        <h4>{inventory.title}</h4>
        <h3>{`${inventory.price} Euros`}</h3>
        <button onClick={() => props.addProduct(inventory)}>Add to Cart</button>
        <Link
          className="details"
          to={{ pathname: "/details", state: { id: { inventory }}}}
        >
          <button>DETAILS</button> 
        </Link>
      </li>
    </>
  ));

  return (
    <>
      <div>
       <Link
          className="CART"
          to={{ pathname: "/cart"}}
          //to={{ pathname: "/cart", state: { id: { store }}}}
        >
          <button>View cart</button>
        </Link> 


         {/* <Link to={{pathname:"/cart"}}>
        <button className="cart" onClick={() => dispatch({type:'', payload:item})}>View Cart</button> */}
        {/* </Link> */}
        {/* {click && ( */}
            {/* <CartPage value={cart} removeFeature={removeItem}/> */}
        {/* )} */}
        {/* {!click && ( */}
        
            <ul className="inventory-list">{inventoryList}</ul>
        {/* )} */}
        
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
  )(HomePage);


//export default HomePage;
