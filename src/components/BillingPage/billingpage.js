import React from "react";

import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
export default () => {
  const classes = useStyles();

  return (
    <>
      <h2 className="checkout">Billing</h2>
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
            <Button
              style={{ width: "100px", margin: "5px 10px 10px 10px" }}
              variant="contained"
              size="large"
              color="secondary"
              href="/orders"
            >
              CONFIRM
            </Button>

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
    </>
  );
};
