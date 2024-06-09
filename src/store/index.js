import { configureStore } from '@reduxjs/toolkit';
import ipDataReducer from './ipDataSlice';

export const store = configureStore({
  reducer: {
    ipData: ipDataReducer,
  },
});