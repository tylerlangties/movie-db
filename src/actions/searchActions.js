export const FETCH_SEARCH_RESULTS_BEGIN = 'FETCH_SEARCH_RESULTS_BEGIN';
export const FETCH_SEARCH_RESULTS_SUCCESS = 'FETCH_SEARCH_RESULTS_SUCCESS';
export const FETCH_SEARCH_RESULTS_FAILURE = 'FETCH_SEARCH_RESULTS_FAILURE';

export function fetchSearchResults(query) {
  return dispatch => {
    dispatch(fetchSearchResultsBegin(query));
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=cf65357798b4e24beec38d083ff73b9d&language=en-US&query=${query}&page=1&include_adult=false`
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchSearchResultsSuccess(json.results));
        return json.results;
      })
      .catch(error => dispatch(fetchSearchResultsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const fetchSearchResultsBegin = () => ({
  type: FETCH_SEARCH_RESULTS_BEGIN
});

export const fetchSearchResultsSuccess = results => ({
  type: FETCH_SEARCH_RESULTS_SUCCESS,
  payload: { results }
});

export const fetchSearchResultsFailure = error => ({
  type: FETCH_SEARCH_RESULTS_FAILURE,
  payload: { error }
});
