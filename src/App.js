import React from 'react';

import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';
import HomePage from './pages/HomePage';
import SearchList from './pages/SearchList';
import AllContentList from './pages/AllContentList';

import styled from 'styled-components';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  state = {
    movie: 'movie',
    tv: 'tv'
  };

  render() {
    return (
      <Router>
        <AppStyles>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/searchresults"
              component={() => <SearchList />}
            />
            <Route
              exact
              path="/now-trending"
              component={() => <AllContentList type={this.state.movie} />}
            />
            <Route
              exact
              path="/featured-shows"
              component={() => <AllContentList type={this.state.tv} />}
            />
            <Route path="/:id" component={MovieDetail} />
          </Switch>
        </AppStyles>
      </Router>
    );
  }
}

export default App;

const AppStyles = styled.div`
  text-align: center;
`;
