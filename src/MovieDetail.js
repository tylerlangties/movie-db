import React, { Component } from 'react';
import { Poster } from './Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {

state = {
movie: {},
}

async componentWillMount() {
try {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=cf65357798b4e24beec38d083ff73b9d&language=en-US`)
    const movie = await res.json();
    console.log(movie)
    this.setState({
    movie: movie,
    })
} catch(e) {
    console.log(e)
}
}

render() {
    const { movie } = this.state;
    return (
        <div>
            {this.state.movie && 
    <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`} alt={movie.title}>
    <MovieInfo>
        <Overdrive id={movie.title}>
            <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
        </Overdrive>
        <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release}</h3>
            <p>{movie.overview}</p>
        </div>
        </MovieInfo>
    </MovieWrapper>
            }
    </div>
    );
}
}

export default MovieDetail;

const MovieWrapper = styled.div`
    position: relative;
    padding-top: 50vh;
    background: url(${props => props.backdrop}) no-repeat;
    background-size: cover;
`
const MovieInfo = styled.div`
    background: white;
    text-align: left;
    padding: 2rem 10%;
    display: flex;
    > div {
        margin-left: 20px;
    }
    img {
        position: relative;
        top: -5rem;
    }
`;