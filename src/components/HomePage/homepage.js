import React, { useEffect, useState } from "react";
import "./homepage.css";

function HomePage() {
  const [inventories, setInventories] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setInventories(res));
  }, []);

  const inventoryList = inventories.map((inventory) => (
    <>
      <li className="item-tile">
        <img src={inventory.image} alt="pics" width="200" height="150" />
        <h4>{inventory.title}</h4>
        <h3>{`${inventory.price} Euros`}</h3>
        <button>Add to Cart</button>
      </li>
    </>
  ));

  return (
    <>
      <div>
        <ul className="inventory-list">{inventoryList}</ul>
      </div>
    </>
  );
}

export default HomePage;
