import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import "../../App.css";
import "./cartpage.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const location = useLocation();
  const { cart } = location.state.id;
  console.log(cart, "from cartpage js")

  const cartList = cart.map((item) => (
      <>
      <div className= "individual">
          <div className = "left">
       <img src={item.image} alt="pics" width="100" height="100" />
       </div>
       <div className="right">
       <h6>{item.title}</h6>
       <h6>{`${item.price}  Euros`}</h6>
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
