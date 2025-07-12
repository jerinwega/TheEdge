import { configureStore } from '@reduxjs/toolkit';
// import weatherReducer from './reducers/weatherReducer';
import logger from 'redux-logger';

const dummyReducer = (state = {}) => state;

const store = configureStore({
  reducer: {
    dummy: dummyReducer, // at least one reducer is required
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export default store;
