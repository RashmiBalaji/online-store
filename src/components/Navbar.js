// import React from "react";
// import { Link } from "react-router-dom";
// import { useSelector } from 'react-redux';
 import "../App.css";
// const Navbar = () => {

//     const data = useSelector((store) => store.cart)
//     const cartQuantity = data.length;

//    console.log(data,"cart initial from cartpage")
//   return (
//     <nav className="nav-wrapper">
//       <div className="container">
//           <h1>MARKETPLACE</h1>
//         <ul className="right">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/cart">My cart{cartQuantity>0? `(${cartQuantity})`:""}</Link>
//           </li>
//           <li>
//             <Link to="/orders">Orders</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";

import { useSelector } from 'react-redux';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    alignitems:"center",
  },
}));

function NavBar() {
    const data = useSelector((store) => store.cart)
 const cartQuantity = data.length;
  const classes = useStyles();
 


  return (
    <div className={classes.root}>
     
      <AppBar position="fixed">
        <Toolbar>
         
          <Typography style={{align:"center"}} variant="h6" className={classes.title}>
            MARKETPLACE
          </Typography>
        
            <div>
              
              
              <div className="hori-menu">
                <Button variant="contained" color="secondary" style={{ margin: "3px 10px 0px 0px" }}component={Link} to="/">Home</Button>
                <Button variant="contained" color="secondary" style={{ margin: "3px 10px 0px 0px" }} component={Link} to="/cart">My cart{cartQuantity>0? `(${cartQuantity})`:""}</Button>
                <Button variant="contained" color="secondary" style={{ margin: "3px 10px 0px 0px" }} component={Link} to="/orders">Orders</Button>
               </div> 
            
            </div>
        
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default NavBar;
