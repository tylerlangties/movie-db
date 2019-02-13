export const FETCH_ALL_MOVIES_RESULTS_BEGIN = 'FETCH_GENRE_RESULTS_BEGIN';
export const FETCH_ALL_MOVIES_RESULTS_SUCCESS = 'FETCH_GENRE_RESULTS_SUCCESS';
export const FETCH_ALL_MOVIES_RESULTS_FAILURE = 'FETCH_GENRE_RESULTS_FAILURE';

export function fetchAllMoviesResults(type, pageNumber) {
  return dispatch => {
    dispatch(fetchAllMoviesResultsBegin(type, pageNumber));
    return fetch(
      `https://api.themoviedb.org/3/discover/${type}?api_key=cf65357798b4e24beec38d083ff73b9d&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&page=${pageNumber}`
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchAllMoviesResultsSuccess(json.results));
        return json.results;
      })
      .catch(error => dispatch(fetchAllMoviesResultsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const fetchAllMoviesResultsBegin = () => ({
  type: FETCH_ALL_MOVIES_RESULTS_BEGIN
});

export const fetchAllMoviesResultsSuccess = results => ({
  type: FETCH_ALL_MOVIES_RESULTS_SUCCESS,
  payload: { results }
});

export const fetchAllMoviesResultsFailure = error => ({
  type: FETCH_ALL_MOVIES_RESULTS_FAILURE,
  payload: { error }
});
