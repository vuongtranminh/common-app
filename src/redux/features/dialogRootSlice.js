import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dialog: null,
};

export const dialogRootSlice = createSlice({
    name: 'dialogRoot',
    initialState,
    reducers: {
        openDialog: (state, action) => {
            const dialog = action.payload;
            state.dialog = dialog;
        },
        closeDialog: (state) => {
            state.dialog = null;
        },
    },
});

export const { openDialog, closeDialog } = dialogRootSlice.actions;

export default dialogRootSlice.reducer;
