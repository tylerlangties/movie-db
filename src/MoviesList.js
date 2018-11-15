import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Movie from './Movie';

class MoviesList extends PureComponent {

state = {
    movies: []
}

async componentDidMount() {
try {
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=cf65357798b4e24beec38d083ff73b9d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    const movies = await res.json();
    console.log(movies)
    this.setState({
    movies: movies.results
    })
} catch(e) {
    console.log(e)
}
}

render() {
return (
<MovieGrid>
    {this.state.movies.map(movie => <Movie key={movie.id} movie={movie}/> )}
</MovieGrid>
);
}
}

export default MoviesList;

const MovieGrid = styled.div`    
    display: grid;
    margin: 2rem;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 1rem;
    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media(max-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

