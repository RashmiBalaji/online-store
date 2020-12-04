import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect, useSelector } from "react-redux";
import { placeOrder } from "../../actions/cartactions.js";
import { Redirect } from "react-router-dom";
import "../../App.css";

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
  const [card, setCard] = useState("");
  const [password, setPassword] = useState("");
  const [validation, setValidation] = useState(false);

  const classes = useStyles();
  const data = useSelector((store) => store.cart);

  function handleCardChange(e) {
    setCard(parseInt(e.target.value));
  }
  function handlePasswordChange(e) {
    setPassword(parseInt(e.target.value));
  }

  //To check form validation on submit
  function handleSubmit(e) {
    e.preventDefault();
    if (!card || !password) {
      window.alert("Enter all required details");
    } else {
      props.placeOrder(data);
      setValidation(true);
    }
  }

  return (
    <>
      <div style={{ paddingTop: "10vh" }}>
        <h2 className="checkout">Billing Particulars</h2>
        <div className="form">
          <form className={classes.root} onSubmit={handleSubmit}>
            <TextField
              required
              id="outlined-required"
              label="Enter your card number here"
              type="number"
              variant="outlined"
              value={card}
              onChange={handleCardChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Enter CVV here"
              variant="outlined"
              type="number"
              value={password}
              onChange={handlePasswordChange}
            />
            <div class="buttons">
              <Button
                style={{ width: "100px", margin: "5px 10px 10px 10px" }}
                variant="contained"
                size="large"
                color="secondary"
                href="/"
              >
                CANCEL
              </Button>
              <button
                style={{
                  width: "100px",
                  margin: "5px 10px 10px 10px",
                  backgroundColor: "#4791db",
                  color: "white",
                  borderRadius: "4px",
                  fontSize: "15px",
                }}
                variant="contained"
                TYPE="submit"
                size="large"
                color="secondary"
                href="/orders"
              >
                CONFIRM
              </button>

              {validation && (
                <Redirect
                  to={{
                    pathname: "/orders",
                  }}
                  style={{ textDecoration: "none" }}
                ></Redirect>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

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
