import React, { PureComponent } from 'react';
import { HomeContainer } from '../styles/HomeContainer';
import { connect } from 'react-redux';
import MovieSlider from '../components/MovieSlider';

class HomePage extends PureComponent {
  state = {
    genreIds: ['37', '28', '878', '27', '35'],
    data: [],
    genreTitle: ''
  };

  render() {
    const { genreIds } = this.state;
    return (
      <HomeContainer>
        {genreIds.map(id => (
          <MovieSlider id={id} />
        ))}
      </HomeContainer>
    );
  }
}

const mapStateToProps = state => ({
  results: state.genre.results,
  loading: state.genre.loading,
  error: state.genre.error
});

export default connect(mapStateToProps)(HomePage);
