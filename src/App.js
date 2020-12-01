import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import "./App.css";
import HomePage from "./components/HomePage/homepage.js";
import ItemInfo from './components/DetailPage/detailpage.js'
import CartPage from './components/CartPage/cartpage.js'
import Navbar from "./components/Navbar";

const App = () => {
 
  return (
    <>
     <Router>
     <h1>MARKETPLACE</h1>
      {/* <HomePage/>
      <CartPage/> */}
      {/* <Navbar/> */}
     
      <Switch>
      
          <Route exact path='/' component={HomePage} />
          <Route exact path='/details' component={ItemInfo} /> 
          {/* <Route exact path='/cart' component={cartInfo}/> */}
        </Switch>
        </Router>
    </>
  );
};

export default App;
