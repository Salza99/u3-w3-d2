import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";
// import mainReducer from '../reducers'

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
