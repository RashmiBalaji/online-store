// import React from "react";
// import { Link, useParams, useLocation } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// // import Button from '@material-ui/core/Button';
// import "../../App.css";
// import "./cartpage.css";
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

import React, { Component } from 'react';
import { connect, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import store from '../../store/configureStore.js'
import { removeProductFromCart } from "../../actions/cartactions.js"

function CartPage (props) {

    console.log(props,"props from cart page")

    const data = useSelector((store) => store.cart)

   console.log(data,"cart initial from cartpage")
              
        let addedItems = data.length ?
            (  
                data.map(item=>{
                    return(
                       
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img} className=""/>
                                    </div>
                                
                                    <div className="item-desc">
                                        <span className="title">{item.title}</span>
                                        <p>{item.desc}</p>
                                        <p><b>Price: {item.price}$</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        {/* <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                        </div> */}
                                        <button onClick={() => props.removeProduct(item)}>Remove</button>
                                    </div>
                                    
                               </li>                        
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                    <Link className="back" to="/">
            <button variant="contained" color="primary">
              BACK TO HOMEPAGE
            </button>
          </Link>
                </div>  
            </div>
       )
    
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems
    }
}

const mapDispatchToProps = dispatch => {
    return {
      removeProduct: product => dispatch(removeProductFromCart(product))
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(CartPage);
