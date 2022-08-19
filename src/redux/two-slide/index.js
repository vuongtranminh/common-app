import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('twoItems') !== null ? JSON.parse(localStorage.getItem('twoItems')) : [];

const initialState = {
    value: items,
};

export const twoSlice = createSlice({
    name: 'twoItems',
    initialState,
    reducers: {
        action1: (state, action) => {
            const newItem = action.payload;
            const duplicate = state.value;
            console.log(newItem, duplicate);
            localStorage.setItem('twoItems', JSON.stringify(state.value));
        },
        action2: (state, action) => {
            console.log(state, action);
        },
    },
});

export const { action1, action2 } = twoSlice.actions;

export default twoSlice.reducer;
