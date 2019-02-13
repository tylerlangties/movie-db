import React, { Component } from 'react';
import { Poster } from '../components/Movie';
import { MovieDetails, MovieWrapper, MovieInfo } from '../styles/MovieDetails';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {
  state = {
    movie: {}
  };

  async componentWillMount() {
    console.log(this.props.location.state);
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/${this.props.location.state}/${
          this.props.match.params.id
        }?api_key=cf65357798b4e24beec38d083ff73b9d&language=en-US`
      );
      const movie = await res.json();
      this.setState({
        movie
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    const { movie } = this.state;
    return (
      <div>
        {this.state.movie && (
          <MovieWrapper
            backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}
            alt={movie.title}
          >
            <MovieInfo>
              {/* <Overdrive id={movie.title}> */}
              <Poster
                src={`${POSTER_PATH}${movie.poster_path}`}
                alt={movie.title}
              />
              {/* </Overdrive> */}
              <MovieDetails>
                <h1>{movie.title || movie.name}</h1>
                <h3>{movie.tagline}</h3>
                <h5>{movie.release_date}</h5>
                <p>{movie.overview}</p>
                <br />
                <br />
                <p>
                  IMDB Rating:{' '}
                  <span>
                    <strong>{movie.vote_average}</strong>
                  </span>
                </p>
                {movie.budget ? (
                  <p>
                    Budget:{' '}
                    <span>
                      <strong>${movie.budget}</strong>
                    </span>
                  </p>
                ) : (
                  <div />
                )}
                {movie.runtime ? (
                  <p>
                    Runtime:{' '}
                    <span>
                      <strong>{movie.runtime} min</strong>
                    </span>
                  </p>
                ) : (
                  <div />
                )}
              </MovieDetails>
            </MovieInfo>
          </MovieWrapper>
        )}
      </div>
    );
  }
}

export default MovieDetail;
