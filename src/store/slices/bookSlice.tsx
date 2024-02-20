import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Book, BookState} from "../../types/book";

const initialState: BookState = {
    totalCount: 0,
    list: [],
}

const todoSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        addBooks(state, action: PayloadAction<Book>) {
            state.list.push(action.payload);
        },
        clearBookList(state) {
            state.totalCount = 0;
            state.list = [];
        },
        setBooksCount(state, action: PayloadAction<number>) {
            state.totalCount = action.payload;
        }
    },
});

export const {addBooks, clearBookList, setBooksCount} = todoSlice.actions;

export default todoSlice.reducer;