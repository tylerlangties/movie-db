import {
  FETCH_GENRE_RESULTS_BEGIN,
  FETCH_GENRE_RESULTS_SUCCESS,
  FETCH_GENRE_RESULTS_FAILURE
} from '../actions/genreActions';

const initialState = {
  results: [],
  loading: false,
  error: null
};

export default function genreReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRE_RESULTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_GENRE_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results
      };

    case FETCH_GENRE_RESULTS_FAILURE:
      return {
        ...state,
        loading: false,
        results: [],
        error: action.payload.error
      };

    default:
      return state;
  }
}
