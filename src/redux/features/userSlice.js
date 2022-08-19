import { createSlice } from '@reduxjs/toolkit';
import { localStorageKey } from '~/common/AppConstants';

const language =
    localStorage.getItem(localStorageKey.LANGUAGE) !== null
        ? JSON.parse(localStorage.getItem(localStorageKey.LANGUAGE))
        : 'vi';
const loginMethod =
    localStorage.getItem(localStorageKey.LOGIN_METHOD) !== null
        ? JSON.parse(localStorage.getItem(localStorageKey.LOGIN_METHOD))
        : 'otp';
const rememberID =
    localStorage.getItem(localStorageKey.REMEMBER_ID) !== null
        ? JSON.parse(localStorage.getItem(localStorageKey.REMEMBER_ID))
        : false;

const initialState = {
    language,
    loginMethod,
    rememberID,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            const language = action.payload;
            state.language = language;
            localStorage.setItem(localStorageKey.LANGUAGE, JSON.stringify(state.language));
        },
        setLoginMethod: (state, action) => {
            const loginMethod = action.payload;
            state.loginMethod = loginMethod;
            localStorage.setItem(localStorageKey.LOGIN_METHOD, JSON.stringify(state.loginMethod));
        },
        setRememberID: (state, action) => {
            const rememberID = action.payload;
            state.rememberID = rememberID;
            localStorage.setItem(localStorageKey.REMEMBER_ID, JSON.stringify(state.rememberID));
        },
    },
});

export const { setLanguage, setLoginMethod, setRememberID } = userSlice.actions;

export default userSlice.reducer;
