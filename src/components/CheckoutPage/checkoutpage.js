import React from "react";

import "../../App.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect,useSelector } from "react-redux";
import store from "../../store/configureStore.js";
import { Link, Redirect, useParams, useLocation } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
      width: "30ch",
      display: "flex",
      flexWrap: "wrap",
    },
  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
function Checkout (props) {
  const classes = useStyles();

  console.log(props.location.state,"cart from checkout page using redirect")
  console.log(store,"store from checkout page")
  const data = useSelector((store) => store.cart);

  console.log(data, "cart initial from checkout page");

  return (
    <>
    <div style={{paddingTop:"10vh"}}>
      <h2 className="checkout" >Personal Information</h2>
      <div className="form" >
        <form className={classes.root}>
          <TextField
            required
            id="outlined-required"
            label="Enter your first name"
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="Enter your last name"
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            required
            id="outlined-basic"
            label="Enter your contact number"
            variant="outlined"
          />
          <br></br>
          <br></br>
          <TextField
            required
            id="outlined-multiline-static"
            label="Enter the shipping address"
            multiline
            rows={4}
            variant="outlined"
          />
          <br></br>
          <br></br>
          <div class="buttons">
            <Button
              style={{ width: "100px", margin: "5px 20px 10px 20px" }}
              variant="contained"
              size="large"
              color="primary"
              href="/"
            >
              CANCEL
            </Button>
<Link to={{
    pathname:"/billing"
}}>
            <Button
              style={{ width: "100px", margin: "5px 10px 10px 10px" }}
              variant="contained"
              size="large"
              color="secondary"
              href="/billing"
            >
              CONTINUE
            </Button>
            </Link>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};


// const mapStateToProps = (state) => {
//     return {
//       items: state.ordersPlaced,
//     };
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       placeOrder: (product) => dispatch(placeOrder(product)),
//     };
//   };
  
//   export default connect(mapStateToProps)(Checkout);

  export default Checkout;
