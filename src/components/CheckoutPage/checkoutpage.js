import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
// import Button from '@material-ui/core/Button';
import "../../App.css";
//import "./detailpage.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
//   const location = useLocation();
//   const { inventory } = location.state.id;

  return (
    <>
     <form className="user-details">
         <input type="text" placeholder="Enter your first name"></input><br></br><br></br>
         <input type="text" placeholder="Enter your last name"></input><br></br><br></br>
         <input type="number" placeholder="Enter your contact number"></input><br></br><br></br>
         <textarea placeholder="Enter the shipping address"></textarea><br></br><br></br>
          <input type="number" placeholder="Enter your card number here"></input><br></br><br></br>
          <input type="number" placeholder="Enter CVV here"></input><br></br><br></br>
         <Link  to="/orders">
             {/* <h4>Do you want to continue with the payment</h4> */}
            <button variant="contained" color="primary">
              CONFIRM
            </button>
            </Link>
     </form>
    </>
  );
};
