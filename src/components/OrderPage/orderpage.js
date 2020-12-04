import React from "react";
import { useSelector } from "react-redux";
import "./orderpage.css";

function OrderPage(props) {
  const data = useSelector((store) => store.orders);

  const totalPrice = data
    .reduce((a, b) => a + b.price * b.quantity, 0)
    .toFixed(2);

  const inventoryList = data.map((inventory) => (
    <>
      <li className="individual-order">
        <div className="left-cart">
          <img src={inventory.image} alt="pics" width="50" height="50" />
        </div>
        <div className="right-cart">
          <p>{inventory.title}</p>
          <p>Quantity: {inventory.quantity}</p>
          <p>{`${inventory.price} Euros`}</p>
        </div>
      </li>
    </>
  ));

  return (
    <>
      <div style={{ paddingTop: "10vh", marginLeft: "10vh" }}>
        <h4>Your order for the following items are placed:</h4>
        {inventoryList.length > 0 && (
          <>
            <div className="container-cart">
              <ul className="order-list">{inventoryList}</ul>
            </div>
            <h3>Your total order value: {totalPrice} Euros</h3>
          </>
        )}
        {inventoryList.length === 0 && <h3>No orders placed yet</h3>}
      </div>
    </>
  );
}

export default OrderPage;
