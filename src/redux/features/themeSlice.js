import { createSlice } from '@reduxjs/toolkit';
import { localStorageKey } from '~/common/AppConstants';

const theme =
    localStorage.getItem(localStorageKey.THEME) !== null
        ? JSON.parse(localStorage.getItem(localStorageKey.THEME))
        : 'theme-mode-dark';

const initialState = {
    theme,
};

export const themeSlice = createSlice({
    name: 'themeMode',
    initialState,
    reducers: {
        setMode: (state, action) => {
            const theme = action.payload;
            state.theme = theme;
            localStorage.setItem(localStorageKey.THEME, JSON.stringify(state.theme));
        },
    },
});

export const { setMode } = themeSlice.actions;

export default themeSlice.reducer;
