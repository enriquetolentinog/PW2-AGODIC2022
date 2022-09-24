import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./classComponent";
import FunctionalComponent from "./FunctionalComponent";

function App() {
  return (
    <Fragment>
      <ClassComponent />
      <FunctionalComponent />
    </Fragment>
  );
}

export default App;
