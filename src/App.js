import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import './App.css';

import MovieDetail from './MovieDetail';
import MoviesList from './MoviesList';


const App = () => (
  <Router>
  <div className="App">
    <header className="App-header">
    <Link to="/">
      <img src={logo} className="App-logo" alt="logo" />
    </Link>
    </header>
    <Switch>
    <Route exact path="/" component={MoviesList} />
    <Route path="/:id" component={MovieDetail} />
    </Switch>
  </div>
  </Router>
)


export default App;
