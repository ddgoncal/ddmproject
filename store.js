import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/counterSlice';
import currentUserReducer from './reducers/currentUserSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    currentUser: currentUserReducer,
  },
});
