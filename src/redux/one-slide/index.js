import { createSlice } from '@reduxjs/toolkit';

const items = localStorage.getItem('twoItems') !== null ? JSON.parse(localStorage.getItem('twoItems')) : [];

const initialState = {
    value: items,
};

export const oneSlice = createSlice({
    name: 'oneItems',
    initialState,
    reducers: {
        action1: (state, action) => {
            const newItem = action.payload;
            const duplicate = state.value;
            console.log(newItem, duplicate);
            localStorage.setItem('oneItems', JSON.stringify(state.value));
        },
        action2: (state, action) => {
            console.log(state, action);
        },
    },
});

export const { action1, action2 } = oneSlice.actions;

export default oneSlice.reducer;
