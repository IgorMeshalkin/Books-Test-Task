import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {categories, sortOptions} from "../../source/staticContent";
import {FetchState} from "../../types/fetch";
import {fetchStep} from "../../utils/systemVariables";

const initialState: FetchState = {
    isFetching: false,
    startIndex: 0,
    query: '',
    category: categories[0].name,
    sortOption: sortOptions[0].name
}

const todoSlice = createSlice({
    name: 'fetch',
    initialState,
    reducers: {
        startFetching(state, action: PayloadAction<FetchState>) {
            state.isFetching = action.payload.isFetching;
            if (!isNaN(action.payload.startIndex)) {
                state.startIndex = action.payload.startIndex;
            }
            state.query = action.payload.query;
            state.category = action.payload.category;
            state.sortOption = action.payload.sortOption;
        },
        finishFetching(state) {
            state.isFetching = false;
            state.startIndex += fetchStep;
        }
    },
});

export const { startFetching, finishFetching } = todoSlice.actions;

export default todoSlice.reducer;