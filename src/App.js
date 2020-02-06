import React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/input/Input';
import Output from './components/output/index';
import StartDelay from './components/startDelay/startDelay';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Header></Header>
      </React.Fragment>

      <Switch>
        <Route exact path="/">
          <Input></Input>
        </Route>
        <Route path="/output">
          <Output></Output>
        </Route>
        <Route path="/delay">
          <StartDelay></StartDelay>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
