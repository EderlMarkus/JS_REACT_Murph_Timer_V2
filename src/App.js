import React from 'react';
import './App.css';
import Header from './components/Header';
import Input from './components/input/Input';
import Output from './components/output/index';
import StartDelay from './components/startDelay/startDelay';
import { HashRouter, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <HashRouter basename="/">
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
    </HashRouter>
  );
}

export default App;
