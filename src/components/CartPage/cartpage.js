import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import "../../App.css";
import "./cartpage.css";
import setCart from '../../components/HomePage/homepage.js'


// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
//   const location = useLocation();
//   console.log(location,"location")
//   const { cart } = location.state.id;
//   //const removeItem  = location.state.remove;
//   console.log(cart, "from cartpage js")
//   console.log(location.state.handler)

console.log(props.value)
console.log(props)

  

  const cartList = props.value.map((item) => (
      <>
      <div className= "individual">
          <div className = "left">
       <img src={item.image} alt="pics" width="100" height="100" />
       </div>
       <div className="right">
       <h6>{item.title}</h6>
       <h6>{`${item.price}  Euros`}</h6>
       <button onClick={() => props.removeFeature(item)}>Remove from Cart</button>
       </div>
       </div>
      </>

  ))

  return (
    <>
    
      {/* <Link className="back" to="/">
            <button variant="contained" color="primary">
              BACK
            </button>
          </Link> */}
      <div className="outer">{cartList}
      <button>Proceed to Buy</button>
      </div>
    </>
  );
};
