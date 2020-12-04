import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import { addProductToCart } from "../../actions/cartactions.js";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./homepage.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function HomePage(props) {
  const classes = useStyles();

  const data = useSelector((store) => store.inventories);

  const inventoryList = data.map((inventory) => (
    <>
      <li className="item-tile">
        <img src={inventory.image} alt="pics" width="200" height="150" />
        <h4>{inventory.title}</h4>
        <h5>{`${inventory.price} Euros`}</h5>
        <div className={classes.root}>
          <div className="buttons">
            <Button
              style={{ margin: "0px 5px 10px 0px" }}
              onClick={() => props.addProduct(inventory)}
              variant="contained"
              color="primary"
              size="small"
            >
              Add to cart
            </Button>

            <Link
              className="details"
              to={{ pathname: "/details", state: { id: { inventory } } }}
            >
              <Button variant="contained" color="primary" size="small">
                Details
              </Button>
            </Link>
          </div>
        </div>
      </li>
    </>
  ));

  return (
    <>
      <div className="container-homepage">
        <ul className="inventory-list">{inventoryList}</ul>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (product) => dispatch(addProductToCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
