export const FETCH_GENRE_RESULTS_BEGIN = 'FETCH_GENRE_RESULTS_BEGIN';
export const FETCH_GENRE_RESULTS_SUCCESS = 'FETCH_GENRE_RESULTS_SUCCESS';
export const FETCH_GENRE_RESULTS_FAILURE = 'FETCH_GENRE_RESULTS_FAILURE';

export function fetchGenreResults(genre) {
  return dispatch => {
    dispatch(fetchGenreResultsBegin(genre));
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=cf65357798b4e24beec38d083ff73b9d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchGenreResultsSuccess(json.results));
        return json.results;
      })
      .catch(error => dispatch(fetchGenreResultsFailure(error)));
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
export const fetchGenreResultsBegin = () => ({
  type: FETCH_GENRE_RESULTS_BEGIN
});

export const fetchGenreResultsSuccess = results => ({
  type: FETCH_GENRE_RESULTS_SUCCESS,
  payload: { results }
});

export const fetchGenreResultsFailure = error => ({
  type: FETCH_GENRE_RESULTS_FAILURE,
  payload: { error }
});
