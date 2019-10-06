import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

// Components
import Home from './components/Home';
import Countries from './components/Countries';
import Country from './components/Country';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/countries" component={Countries} />
      <Route exact path="/countries/:code" component={Country} />
    </Switch>
  );
}

export default App;
