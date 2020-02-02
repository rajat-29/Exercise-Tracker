import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from "./Components/navbar.component";
import ExerciseList from "./Components/exerciseList.component";
import EditExercise from "./Components/editExercise.component";
import createExercise from "./Components/createExercise.component";
import createUser from "./Components/createUser.component";

class App extends Component {
  render() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ ExerciseList } />
        <Route path="/create" component={ createExercise } />
        <Route path="/user" component={ createUser } />
      </div>
    </Router>
  );
}
}

export default App;
