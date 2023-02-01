import React, { ReactElement, useEffect, useState, ChangeEvent } from "react";
import "./App.css";
import GitSearch from "./components/GitSearch";

const App = (): ReactElement => {

  return (
    <div className="App">
      <GitSearch/>
    </div>
  );
};

export default App;
