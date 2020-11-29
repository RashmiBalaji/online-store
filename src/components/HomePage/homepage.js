import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./homepage.css";
import CartPage from '../CartPage/cartpage.js'

function HomePage() {
  const [inventories, setInventories] = useState([]);
  const [cart, setCart] = useState([]);
  const [click, setClick] = useState(false)

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

  function cartView () {
      setClick(true)
  }

  function removeItem (inventory) {
    console.log("remove item clicked",cart)
    const filteredItems = cart.filter((item) => item.id !==inventory.id)
    console.log(filteredItems,"after remove click")
    setCart([...filteredItems])
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
          to={{ pathname: "/details", state: { id: { inventory }}}}
        >
          <button>DETAILS</button>
        </Link>
      </li>
    </>
  ));

  return (
    <>
      <div>
      {/* <Link
          className="CART"
          to={{ pathname: "/cart", state: { id: { cart }}}}
        >
          <button>View cart</button>
        </Link> */}
        {/* <Link to={{pathname:"/cart"}}> */}
        <button className="cart" onClick={cartView}>View Cart</button>
        {/* </Link> */}
        {click && (
            <CartPage value={cart} removeFeature={removeItem}/>
        )}
        {!click && (
            <ul className="inventory-list">{inventoryList}</ul>
        )}
        
      </div>
    </>
  );
}

export default HomePage;
