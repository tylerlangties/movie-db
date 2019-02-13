import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { MovieGrid } from '../styles/MovieGrid';
import Movie from '../components/Movie';

class SearchList extends React.Component {
  render() {
    const { error, loading, results } = this.props;
    if (error) console.log(error);
    return !loading ? (
      <MovieGrid>
        {results.map(movie => (
          <Movie key={movie.id} movie={movie} type="movie" />
        ))}
      </MovieGrid>
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = state => ({
  results: state.search.results,
  loading: state.search.loading,
  error: state.search.error
});

export default connect(mapStateToProps)(SearchList);
