import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import Loading from './Loading';
import { genres } from '../utils/genres';
import { fetchGenreResults } from '../actions/genreActions';
import { settings } from '../utils/sliderSettings';

class MovieSlider extends PureComponent {
  state = {
    genreTitle: '',
    genreResults: []
  };

  componentDidMount = () => {
    if (this.props.loading) {
      return <Loading />;
    } else {
      let results = this.props.dispatch(fetchGenreResults(this.props.id));
      results.then(value => {
        this.setState({
          genreResults: value
        });
      });
      this.setState({
        genreTitle: genres.genres.find(x => x.id == this.props.id).name
      });
    }
  };

  render() {
    const { error, loading } = this.props;
    if (error) {
      console.log(error);
    }
    return !loading ? (
      <Container>
        <div className="row-header-title">
          <h2>{this.state.genreTitle}</h2>
        </div>
        <Slider {...settings}>
          {this.state.genreResults.map((movie, index) => (
            <div key={index}>
              <Movie key={movie.id} movie={movie} type="movie" />
            </div>
          ))}
        </Slider>
      </Container>
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = state => ({
  results: state.genre.results,
  loading: state.genre.loading,
  error: state.genre.error
});

export default connect(mapStateToProps)(MovieSlider);

const Container = styled.div`
  padding: 1rem;
  max-width: 95vw;
  margin: 0 auto;
  .row-header-title {
    display: flex;
    justify-content: flex-start;
    h2 {
      color: #e5e5e5;
      padding-left: 2rem;
    }
  }

  img {
    display: inline;
    transition: transform 200ms ease;
    z-index: 100;
    &:hover {
      transform: scale(1.1);
    }
  }
  @media (max-width: 996px) {
    max-width: 100%;
    padding: 0.5rem;
  }
`;
