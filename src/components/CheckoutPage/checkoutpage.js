import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import "../../App.css";

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
function Checkout(props) {
  const classes = useStyles();

  const data = useSelector((store) => store.cart);

  const [firstName, setFirstName] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const [validation, setValidation] = useState(false);

  function handleNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleContactChange(e) {
    setContact(e.target.value);
  }
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName || !contact || !address) {
      alert("Enter all required details");
    } else {
      setValidation(true);
      return (
        <Redirect
          to={{
            pathname: "/billing",
          }}
          style={{ textDecoration: "none" }}
        ></Redirect>
      );
    }
  }

  return (
    <>
      {data.length > 0 && (
        <div style={{ paddingTop: "10vh" }}>
          <h2 className="checkout">Personal Information</h2>

          <div className="form" onSubmit={handleSubmit}>
            <form className={classes.root} onSubmit={handleSubmit}>
              <TextField
                required
                id="outlined-required"
                label="Enter your first name"
                name="firstName"
                value={firstName}
                variant="outlined"
                onChange={handleNameChange}
              />
              <br></br>
              <br></br>
              <TextField
                id="outlined-basic"
                label="Enter your last name"
                variant="outlined"
                onChange={handleContactChange}
              />
              <br></br>
              <br></br>
              <TextField
                required
                id="outlined-basic"
                name="contact"
                value={contact}
                label="Enter your contact number"
                onChange={handleContactChange}
                variant="outlined"
              />
              <br></br>
              <br></br>
              <TextField
                required
                id="outlined-multiline-static"
                name="address"
                value={address}
                label="Enter the shipping address"
                multiline
                rows={4}
                variant="outlined"
                onChange={handleAddressChange}
              />
              <br></br>
              <br></br>
              <div class="buttons">
                <Button
                  style={{ width: "100px", margin: "5px 20px 10px 20px" }}
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
                  type="submit"
                  variant="contained"
                  size="large"
                  color="secondary"
                  href="/billing"
                >
                  CONTINUE
                </button>
                {validation && (
                  <Redirect
                    to={{
                      pathname: "/billing",
                    }}
                    style={{ textDecoration: "none" }}
                  ></Redirect>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
      {data.length === 0 && (
        <>
          <h3 style={{ paddingTop: "20vh", marginLeft: "10vh" }}>
            No items yet in cart. Please add items to cart to continue shopping
          </h3>

          <Button
            style={{ margin: "5vh 0vh 0vh 10vh" }}
            variant="contained"
            href="/"
            size="small"
            color="primary"
          >
            CONTINUE SHOPPING
          </Button>
        </>
      )}
    </>
  );
}

export default Checkout;
