import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/navbar.component';
import ExercisesList from './components/ExercisesList.component';
import EditExercise from './components/EditExercise.component';
import CreateExercise from './components/CreateExercise.component';
import CreateUser from './components/CreateUser.component';


function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/update/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;