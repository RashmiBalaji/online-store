import React from "react";

import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect,useSelector } from "react-redux";
import { placeOrder } from "../../actions/cartactions.js";
import { Link, Redirect, useParams, useLocation } from "react-router-dom";


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

// eslint-disable-next-line import/no-anonymous-default-export
function BillingPage(props) {
  const classes = useStyles();
  const data = useSelector((store) => store.cart);

  console.log(data, "cart initial from billing page");

  return (
    <>
    <div style={{paddingTop:"10vh"}}>
      <h2 className="checkout">Billing Particulars</h2>
      <div className="form">
        <form className={classes.root}>
          <TextField
            required
            id="outlined-required"
            label="Enter your card number here"
            variant="outlined"
          />
          <TextField
            required
            id="outlined-required"
            label="Enter CVV here"
            variant="outlined"
          />
          <div class="buttons">
          <Link to={{
    pathname:"/orders"
}} style={{textDecoration:'none'}}>
            <Button
              style={{ width: "100px", margin: "5px 10px 10px 10px" }}
              variant="contained"
              size="large"
              color="secondary"
              href="/orders"
              onClick={() => props.placeOrder(data)}
            >
              CONFIRM
            </Button>
</Link>
            <Button
              style={{ width: "100px", margin: "5px 10px 10px 10px" }}
              variant="contained"
              size="large"
              color="secondary"
              href="/"
            >
              CANCEL
            </Button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
    return {
      items: state.data,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      placeOrder: (product) => dispatch(placeOrder(product)),
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(BillingPage);
