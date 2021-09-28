import React from "react";
import ReactDOM from "react-dom";
//import ProductsProvider from "./context/products-context";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./hooks-store/products-store";

import "./index.css";
import App from "./App";

configureStore();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
