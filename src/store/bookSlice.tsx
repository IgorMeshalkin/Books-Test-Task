import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Book} from "../types/book";

type BookState = {
    list: Book[];
}

const initialState: BookState = {
    list: [],
}

const todoSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks(state, action: PayloadAction<Book>) {
            state.list.push(action.payload);
        }
    },
});

export const { addBooks } = todoSlice.actions;

export default todoSlice.reducer;