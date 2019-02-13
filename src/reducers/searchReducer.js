import {
  FETCH_SEARCH_RESULTS_BEGIN,
  FETCH_SEARCH_RESULTS_SUCCESS,
  FETCH_SEARCH_RESULTS_FAILURE
} from '../actions/searchActions';

const initialState = {
  results: [],
  loading: false,
  error: null,
  query: ''
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };

    case FETCH_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        loading: false,
        results: action.payload.results
      };

    case FETCH_SEARCH_RESULTS_FAILURE:
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
