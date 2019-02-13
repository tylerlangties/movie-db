import {
  FETCH_ALL_MOVIES_RESULTS_BEGIN,
  FETCH_ALL_MOVIES_RESULTS_SUCCESS,
  FETCH_ALL_MOVIES_RESULTS_FAILURE
} from '../actions/allMoviesActions';

const initialState = {
  results: [],
  loading: false,
  error: null
};

export default function allMoviesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ALL_MOVIES_RESULTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_ALL_MOVIES_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results
      };

    case FETCH_ALL_MOVIES_RESULTS_FAILURE:
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
