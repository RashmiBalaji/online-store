import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  const [inventories, setInventories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setInventories(res));
  }, []);

  function addToCart (inventory) {
      console.log("item added to cart")
      console.log(inventory)
      setCart([...cart,inventory])
   
  }

  const inventoryList = inventories.map((inventory) => (
    <>
      <li className="item-tile">
        <img src={inventory.image} alt="pics" width="200" height="150" />
        <h4>{inventory.title}</h4>
        <h3>{`${inventory.price} Euros`}</h3>
        <button onClick={() => addToCart(inventory)}>Add to Cart</button>
        <Link
          className="details"
          to={{ pathname: "/details", state: { id: { inventory } } }}
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
          to={{ pathname: "/cart", state: { id: { cart } } }}
        >
          <button>View cart</button>
        </Link>
        <ul className="inventory-list">{inventoryList}</ul>
      </div>
    </>
  );
}

export default HomePage;
