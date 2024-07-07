// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlightTable from './components/FlightTable/FlightTable';
import FlightDetail from './components/FlightDetail/FlightDetail';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={FlightTable} />
          <Route path="/flight/:id" component={FlightDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
