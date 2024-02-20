import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {categories, sortOptions} from "../../source/staticContent";
import {FetchState} from "../../types/fetch";
import {fetchStep} from "../../utils/systemVariables";

const initialState: FetchState = {
    isFetching: false,
    fetchIsOver: false,
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
            state.startIndex = action.payload.startIndex;
            state.query = action.payload.query;
            state.category = action.payload.category;
            state.sortOption = action.payload.sortOption;
        },
        startAdditionalFetching(state) {
            state.isFetching = true;
        },
        finishFetching(state) {
            state.isFetching = false;
            state.startIndex += fetchStep;
        },
        overFetch(state) {
            state.fetchIsOver = true;
        },
    },
});

export const {startFetching, startAdditionalFetching, finishFetching, overFetch} = todoSlice.actions;

export default todoSlice.reducer;