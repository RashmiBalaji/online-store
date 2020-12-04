import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { removeProductFromCart } from "../../actions/cartactions.js";
import "./cartpage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "30ch",
      display: "flex",
      flexWrap: "wrap",
    },
  },
}));

function CartPage(props) {
  const classes = useStyles();

  const data = useSelector((store) => store.cart);

  const totalPrice = (data.reduce((a, b) => a + b.price * b.quantity, 0)).toFixed(2);

  let addedItems = data.length ? (
    data.map((item) => {
      return (
        <li className="individual-cart">
          <div className="left-cart">
            <img src={item.image} alt="pics" width="100" height="100" />
          </div>

          <div className="right-cart">
            <h5 className="title">{item.title}</h5>
            <h6>
              <b>Price: {item.price}$</b>
            </h6>
            <h6>
              <b>Quantity: {item.quantity}</b>
            </h6>

            <Button
              variant="contained"
              size="small"
              color="secondary"
              onClick={() => props.removeProduct(item)}
            >
              Remove
            </Button>
          </div>
        </li>
      );
    })
  ) : (
    <p>Nothing.</p>
  );
  return (
    <div class="outer-container-cart">
      <h2>You have added following items to cart</h2>
      <div className="container-cart">
        <ul className="cart-list">{addedItems}</ul>
      </div>
      <h2>Your total cart value: {totalPrice} Euros</h2>
      <div className={classes.root}>
        <div className="buttons">
          <Button
            variant="contained"
            style={{ margin: "0px 2vh 0px 0px" }}
            href="/"
            size="small"
            color="primary"
          >
            CANCEL
          </Button>
          <Link
            to={{
              pathname: "/checkout",
            }}
            style={{ textDecoration: "none" }}
          >
            <Button variant="contained" size="small" color="primary">
              PROCEED TO CHECKOUT
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.addedItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProduct: (product) => dispatch(removeProductFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
