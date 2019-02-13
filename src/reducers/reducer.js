import { combineReducers } from 'redux';
import search from './searchReducer';
import genre from './genreReducer';
import allMovies from './allMoviesReducer';

export default combineReducers({
  search,
  genre,
  allMovies
});
