import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Components/Landing Page/Home';
import './App.css';
import Auth from './Components/Login/Auth';
import Signup from './Components/Login/Signup';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <Route path="/signup" component={Signup} />
        <Redirect to={Home} />
      </Switch>
    </div>
  );
}

export default App;
