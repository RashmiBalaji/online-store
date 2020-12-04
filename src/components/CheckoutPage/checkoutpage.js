import React, { useState } from "react";

import "../../App.css";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { connect,useSelector } from "react-redux";
import store from "../../store/configureStore.js";
import { Link, Redirect, useParams, useLocation } from "react-router-dom";
//import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'


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

  const [firstName, setFirstName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');

  const [validation, setValidation] =useState(false)
 
  function handleNameChange (e) {
    setFirstName(e.target.value);
  }
  function handleContactChange (e) {
    setContact(e.target.value);
  }
  function handleAddressChange (e) {
    setAddress(e.target.value);
  }
  function handleSubmit (e) {
      console.log("inside handle submit of form")
    e.preventDefault();
    if (!firstName || !contact || !address) {
        window.alert("Enter all required details")
    } else {
        console.log("validation done on form")
        setValidation(true)
        return (
        <Redirect to={{
            pathname:"/billing"
        }} style={{textDecoration:'none'}}>
            </Redirect>
        )
      
    }

    // setTitle('');
    // setDate('');
    // setVenue('');
  }

  return (

    
    <>
    <div style={{paddingTop:"10vh"}}>
      <h2 className="checkout" >Personal Information</h2>
      {/* <Formik
      initialValues={{firstName:'', contact:'', address:''}}
      validationSchema={Yup.object().shape({
          firstName:Yup.string()
          .required('Required'),
          contact:Yup.number()
          .required('Required'),
        address:Yup.string()
          .required('Required')
      })}
      > */}
      <div className="form" onSubmit={handleSubmit}>
        <form className={classes.root} onSubmit={handleSubmit}>
          <TextField
            required
            id="outlined-required"
            label="Enter your first name"
            name="firstName"
            value= {firstName}
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
              color="primary"
              href="/"
            >
              CANCEL
            </Button>
{/* <Link to={{
    pathname:"/billing"
}} style={{textDecoration:'none'}}> */}
            <button
              style={{ width: "100px", margin: "5px 10px 10px 10px" }}
              type="submit"
              variant="contained"
              size="large"
              color="secondary"
              href="/billing"
            >
              CONTINUE
            </button>
            {/* </Link> */}
            {validation && (
                 <Redirect to={{
                    pathname:"/billing"
                }} style={{textDecoration:'none'}}>
                    </Redirect>
            )}
          </div>
        </form>
    
      </div>
      {/* </Formik>  */}
      {/* <form>
                <h2>Add new contact</h2><br></br>
                <input id="firstname" type="text" placeholder="Enter First Name" required/><br></br>
                <input id="surname" type="text" placeholder="Enter Surname" /><br></br>
                <input id="phnumber" type="tel" placeholder="Enter Phone" required pattern="[0-9+]{10,13}"/><br></br>
                <textarea id="address"  rows="5" cols="25" placeholder="Enter address" required ></textarea><br></br>
                 <Link to={{
     pathname:"/billing"
}} style={{textDecoration:'none'}}>
                <button id="add" type="submit">Add Contact
                </button>
                </Link>
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
}} style={{textDecoration:'none'}}>
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
            </form>  */}
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
