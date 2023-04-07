import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;