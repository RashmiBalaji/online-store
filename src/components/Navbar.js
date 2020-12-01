import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import "../App.css";
const Navbar = () => {

    const data = useSelector((store) => store.cart)
    const cartQuantity = data.length;

   console.log(data,"cart initial from cartpage")
  return (
    <nav className="nav-wrapper">
      <div className="container">
          <h1>MARKETPLACE</h1>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">My cart{cartQuantity>0? `(${cartQuantity})`:""}</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
