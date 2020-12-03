import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import db from './data.json'
//import store from './components/HomePage/homepage.js'
console.log(db,"db from mockdata file ")
const initialState = {
inventories:db.items,
  cart: [],
  underPlacement: [],
  orders:[]
}

const store = configureStore(initialState)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
