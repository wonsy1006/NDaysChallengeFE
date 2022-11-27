import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './module/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
