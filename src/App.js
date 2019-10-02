import React from "react";
import CounterDispatch from "./CounterDispatch";
import CounterDispatchToProps from "./CounterDispatchToProps";
import { Router } from "@reach/router";

const App = () => {
  return (
    <Router>
      <CounterDispatch path="/" />
      <CounterDispatchToProps path="/counter" />
    </Router>
  );
};

export default App;
