import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import HomePage from "./components/HomePage/homepage.js";
import ItemInfo from './components/DetailPage/detailpage.js'

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>MARKETPLACE</h1>
      <Router>
      <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/details' component={ItemInfo} /> 
        </Switch>
        </Router>
      {/* <HomePage /> */}
    </>
  );
};

export default App;
