import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice'
import fetchReducer from './slices/fetchSlice'

const store = configureStore({
  reducer: {
    books: bookReducer,
    fetchState: fetchReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
