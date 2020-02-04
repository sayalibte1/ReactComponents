import React from "react";
import "../src/app.scss";
import Header from "./Components/Header/Index.js";
import Routes from "./Components/Routes";

import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div id="app">
      <Router>
        <Header />
        <Routes />
      </Router>
    </div>
  );
}
export default App;
