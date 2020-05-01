import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/navbar.component";
import ExerciseList from "./Components/exerciseList.component";
import EditExercise from "./Components/editExercise.component";
import createExercise from "./Components/createExercise.component";
import CreateUser from "./Components/createUser.component"; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLogined : false,
    }
  }

  onAuth = ()=> {
    this.setState({ 
      isLogined: true 
    })
  }

  render() {
  const {isLogined} = this.state;

  return (
    <div>
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ ExerciseList } />
        <Route path='/edit/:id' component={ EditExercise } />
        <Route path="/create" component={ createExercise } />
        <Route path="/user" component={ CreateUser } />
      </div>
    </Router>
    </div>
  );
}
}

export default App;
