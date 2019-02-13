import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

export default class Movie extends React.Component {
  state = {
    type: ''
  };
  componentDidMount() {
    this.setState({
      type: this.props.type
    });
  }
  render() {
    const { movie } = this.props;
    return (
      <Link to={{ pathname: `/${movie.id}`, state: this.state.type }}>
        {/* <Overdrive id={movie.title}> */}
        <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        {/* </Overdrive> */}
      </Link>
    );
  }
}

// export default Movie;

Movie.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  })
};

export const Poster = styled.img`
  box-shadow: 0 0 15px black;
  margin: 1rem 0;
  @media (max-width: 767px) {
    width: 100px;
  }
`;
