export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";
export const GET_JOBS_LOADING_ON = "GET_JOBS_LOADING_ON";
export const GET_JOBS_LOADING_OFF = "GET_JOBS_LOADING_OFF";
export const GET_JOBS_ERROR = "GET_JOBS_ERROR";

export const addToFavoritesAction = (companyName) => ({
  type: ADD_TO_FAVOURITE,
  payload: companyName,
});

export const removeFromFavoritesAction = (companyName) => ({
  type: REMOVE_FROM_FAVOURITE,
  payload: companyName,
});

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch, getState) => {
    try {
      dispatch({ type: GET_JOBS_LOADING_ON });
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        console.log(data);
        //   setJobs(data);
        dispatch({ type: GET_JOBS, payload: data });
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "GET_JOBS_ERROR", payload: "Errore nel fetch dei dati" });
    } finally {
      dispatch({ type: GET_JOBS_LOADING_OFF });
    }
  };
};
