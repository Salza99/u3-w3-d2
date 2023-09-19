import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING_OFF, GET_JOBS_LOADING_ON } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  hasError: false,
  errorMessage: "",
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        content: action.payload,
      };
    case GET_JOBS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_JOBS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };
    case GET_JOBS_ERROR:
      return {
        ...state,
        hasError: true,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default jobsReducer;
