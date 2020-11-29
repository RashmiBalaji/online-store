import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";

function HomePage() {
  const [inventories, setInventories] = useState([]);
  const [detail, setDetails] = useState(false);

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
        <ul className="inventory-list">{inventoryList}</ul>
      </div>
    </>
  );
}

export default HomePage;
