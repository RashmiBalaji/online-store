// import React from "react";
 import { Link, Redirect, useParams, useLocation } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// // import Button from '@material-ui/core/Button';
// import "../../App.css";
import "./cartpage.css";
// import setCart from '../../components/HomePage/homepage.js'

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
//   const location = useLocation();
//   console.log(location,"location")
//   const { cart } = location.state.id;
// //   //const removeItem  = location.state.remove;
// //   console.log(cart, "from cartpage js")
// //   console.log(location.state.handler)

//   const dispatch = useDispatch()

//   const cartList = cart.map((item) => (
//       <>
//       <div className= "individual">
//           <div className = "left">
//        <img src={item.image} alt="pics" width="100" height="100" />
//        </div>
//        <div className="right">
//        <h6>{item.title}</h6>
//        <h6>{`${item.price}  Euros`}</h6>
//        <button onClick={() => dispatch({type:'cart/removed', payload:item})}>Remove from Cart</button>
//        </div>
//        </div>
//       </>

//   ))

//   return (
//     <>

//       {/* <Link className="back" to="/">
//             <button variant="contained" color="primary">
//               BACK
//             </button>
//           </Link> */}
//       <div className="outer">{cartList}
//       <button>Proceed to Buy</button>
//       </div>
//     </>
//   );
// };

import React, { Component } from "react";
import { connect, useSelector } from "react-redux";
//import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import store from "../../store/configureStore.js";
import { removeProductFromCart } from "../../actions/cartactions.js";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "30ch",
      display: "flex",
      flexWrap: "wrap",
    },
  },
}));

function CartPage(props) {
  const classes = useStyles();
  console.log(props, "props from cart page");

  const data = useSelector((store) => store.cart);

  console.log(data, "cart initial from cartpage");

  let addedItems = data.length ? (
    data.map((item) => {
      return (
          <Box sx={{border:'1px dashed gray'}} clone>
<li className= "individual-cart">         
<div className = "left-cart">
            <img src={item.image} alt="pics" width="100" height="100" />
          </div>

          <div className="right-cart">
            <h5 className="title">{item.title}</h5>
            <h6>
              <b>Price: {item.price}$</b>
            </h6>
            <h6>
              <b>Quantity: {item.quantity}</b>
              </h6>
           
            <Button variant="contained" size="small" color="secondary" onClick={() => props.removeProduct(item)}>Remove</Button>
          </div>
        </li>
        </Box>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (
    <div class="outer-container-cart">
        <h5>You have added following items to cart</h5>
        <div className="container-cart">
        <ul className="cart-list">{addedItems}</ul>
        </div>
        <div className={classes.root}>
            <div className="buttons">
          <Button variant="contained"  style={{ margin: "0px 2vh 0px 0px" }} href="/" size="small" color="primary">
            CANCEL
          </Button>
<Link to={{
    pathname:"/checkout",
    // state: {cartItems: addedItems}
}}>
<Button variant="contained" size="small" color="primary">
            PROCEED TO CHECKOUT
          </Button>
          </Link>
          
          </div>
        </div>
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product) => dispatch(removeProductFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
