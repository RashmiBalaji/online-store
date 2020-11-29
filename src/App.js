import React, { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage/homepage.js";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>MARKETPLACE</h1>
      <HomePage />
    </>
  );
};

export default App;
