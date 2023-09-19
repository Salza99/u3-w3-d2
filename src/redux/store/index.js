import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";

import storage from "redux-persist/lib/storage";
import favoritesReducer from "../reducers/favoritesReducer";
import jobsReducer from "../reducers/jobsReducer";

// import mainReducer from '../reducers'

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptTransform({ secretKey: "my-inviolate-secret-key" })],
};

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  jobs: jobsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
