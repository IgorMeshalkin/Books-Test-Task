import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import bookReducer from './bookSlice'

const store = configureStore({
  reducer: {
    todos: todoReducer,
    books: bookReducer
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
