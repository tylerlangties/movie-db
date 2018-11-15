import React, { Component } from 'react';
import { Poster } from './Movie';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280';

class MovieDetail extends Component {

state = {
    movie: {}
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
        <MovieDetails>
            <h1>{movie.title}</h1>
            <h3>{movie.tagline}</h3>
            <h5>{movie.release_date}</h5>
            <p>{movie.overview}</p>
            <br />
            <br />
            <p>IMDB Rating: <span><strong>{movie.vote_average}</strong></span></p>
            <p>Budget: <span><strong>${movie.budget}</strong></span></p>
            <p>Runtime: <span><strong>{movie.runtime} min</strong></span></p>
        </MovieDetails>
        </MovieInfo>
    </MovieWrapper>
            }
    </div>
    );
}
}

export default MovieDetail;

const MovieDetails = styled.div`
    @media (max-width: 767px) {
        transform: translateY(-10rem);
    }
`;

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
    @media(max-width: 767px) {
        flex-direction: column;
        padding: 0 5% 0;
    }
    > div {
        margin-left: 20px;
        @media(max-width: 767px) {
            margin: 0;
        }
        }
    }
    img {
        position: relative;
        top: -5rem;
        @media(max-width: 767px) {
            top: -12rem;
        }
    }
`;