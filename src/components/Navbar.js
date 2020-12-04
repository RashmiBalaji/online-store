import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import { useSelector } from "react-redux";
import "../App.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignitems: "center",
  },
}));

function NavBar() {
  const data = useSelector((store) => store.cart);
  const cartQuantity = data.reduce((a, b) => a + b.quantity, 0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <ShoppingBasketIcon
            style={{ marginRight: "5vh", marginLeft: "3vh", fontSize: "3vh" }}
          />
          <Typography
            style={{ align: "center" }}
            variant="h6"
            className={classes.title}
          >
            MARKETPLACE
          </Typography>

          <div>
            <div className="hori-menu">
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "3px 10px 0px 0px" }}
                component={Link}
                to="/"
              >
                Home
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "3px 10px 0px 0px" }}
                component={Link}
                to="/cart"
              >
                My cart{cartQuantity > 0 ? `(${cartQuantity})` : ""}
              </Button>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "3px 10px 0px 0px" }}
                component={Link}
                to="/orders"
              >
                Orders
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
