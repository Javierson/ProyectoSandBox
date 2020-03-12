import React from "react";
import "./Styles/App.css";
import { App } from "./App";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
