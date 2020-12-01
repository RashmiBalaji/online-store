// import React from "react";
// import { Link, useParams, useLocation } from "react-router-dom";
// // import Button from '@material-ui/core/Button';
// import "../../App.css";
// import "./detailpage.css";

// // eslint-disable-next-line import/no-anonymous-default-export
// export default () => {
//   const location = useLocation();
//   const { inventory } = location.state.id;

//   return (
//     <>
//       <div className="outer">
//         <div className="left">
//           <img src={inventory.image} alt="pics" width="300" height="300" />
//         </div>
//         <div className="right">
//           <h1>{inventory.title}</h1>
//           <h3>{inventory.category}</h3>
//           <p>{inventory.description}</p>
//           <h2>{`${inventory.price}  Euros`}</h2>

//           <Link className="back" to="/">
//             <button variant="contained" color="primary">
//               BACK
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };
