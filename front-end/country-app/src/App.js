import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import Countries from './components/Countries';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={Countries} />
    </Switch>
  );
}

export default App;
