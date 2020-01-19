import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/navbar.component";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
