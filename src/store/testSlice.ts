import { createSlice, PayloadAction } from '@reduxjs/toolkit';




const todoSlice = createSlice({
    name: 'test',
    initialState: {
        number: 0
    },
    reducers: {
        increment (state) {
            state.number++;
        },
        decrement (state) {
            state.number--;
        }
        // addTodo(state, action: PayloadAction<string>) {
        //     state.list.push({
        //         id: new Date().toISOString(),
        //         title: action.payload,
        //         completed: false,
        //     });
        // },
        // toggleComplete(state, action: PayloadAction<string>) {
        //     const toggledTodo = state.list.find(todo => todo.id === action.payload);
        //     if (toggledTodo) {
        //         toggledTodo.completed = !toggledTodo.completed;
        //     }
        // },
        // removeTodo(state, action: PayloadAction<string>) {
        //     state.list = state.list.filter(todo => todo.id !== action.payload);
        // }
    },
});

export const { increment, decrement } = todoSlice.actions;

export default todoSlice.reducer;