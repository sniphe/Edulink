import './App.css';
import Login from './pages/login';
import Home from './pages/home';
import React from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Compiti from './pages/compiti';
import Avvisi from './pages/avvisi';
import Assenze from './pages/assenze';
import Note from './pages/note';
import chatClasse from './pages/chatClasse';
import ChatProfessori from './pages/chatProfessori';
import Voti from './pages/voti';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/home" component={Home}/>
          <Route path="/compiti" component={Compiti}/>
          <Route path="/avvisi" component={Avvisi}/>
          <Route path="/assenze" component={Assenze}/>
          <Route path='/note' component={Note}/>
          <Route path='/chatclasse' component={chatClasse}/>
          <Route path='/chatprofessori' component={ChatProfessori}/>
          <Route path='/voti' component={Voti}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;