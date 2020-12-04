import React from "react";
import { useLocation } from "react-router-dom";
import "../../App.css";
import "./detailpage.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const classes = useStyles();
  const location = useLocation();
  const { inventory } = location.state.id;

  return (
    <>
      <div className="outer">
        <div className="left">
          <img src={inventory.image} alt="pics" width="300" height="300" />
        </div>
        <div className="right">
          <h1>{inventory.title}</h1>
          <h3>Category: {inventory.category}</h3>
          <p>{inventory.description}</p>
          <h2>{`${inventory.price}  Euros`}</h2>
          <div className={classes.root}>
            <Link
              to={{
                pathname: "/",
              }}
              style={{ textDecoration: "none" }}
            >
              <Button
                style={{ margin: "0px 5px 10px 0px" }}
                variant="contained"
                color="primary"
                size="medium"
              >
                BACK TO HOMEPAGE
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
