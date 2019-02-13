import React from 'react';
import { connect } from 'react-redux';
import { fetchAllMoviesResults } from '../actions/allMoviesActions';
import { LoadButton } from '../styles/LoadButton';
import Movie from '../components/Movie';
import { MovieGrid } from '../styles/MovieGrid';
import Loading from '../components/Loading';

class AllMoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      pageNumber: 1,
      type: ''
    };
  }

  componentDidMount() {
    if (this.state.pageNumber === 1) {
      this.getMovies(this.state.pageNumber);
    }
  }

  getMovies = () => {
    let results = this.props.dispatch(
      fetchAllMoviesResults(this.props.type, this.state.pageNumber)
    );
    results.then(movies => {
      this.setState({
        movies: [...this.state.movies, ...movies],
        pageNumber: this.state.pageNumber + 1,
        loading: false,
        type: this.props.type
      });
      console.log(this.state.pageNumber);
      console.log(this.props.movie);
    });
  };

  render() {
    const { error, loading } = this.props;
    if (error) {
      console.log(error);
    }
    return (
      <div>
        <MovieGrid>
          {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} type={this.state.type} />
          ))}
        </MovieGrid>
        <LoadButton onClick={this.getMovies}>Load More</LoadButton>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.allMovies.results,
  loading: state.allMovies.loading,
  error: state.allMovies.error
});

export default connect(mapStateToProps)(AllMoviesList);
