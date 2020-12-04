import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./components/HomePage/homepage.js";
import ItemInfo from "./components/DetailPage/detailpage.js";
import CartPage from "./components/CartPage/cartpage.js";
import CheckoutPage from "./components/CheckoutPage/checkoutpage.js";
import BillingPage from "./components/BillingPage/billingpage.js";
import OrderPage from "./components/OrderPage/orderpage.js";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/details" component={ItemInfo} />
          <Route exact path="/cart" component={CartPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/billing" component={BillingPage} />
          <Route exact path="/orders" component={OrderPage} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
