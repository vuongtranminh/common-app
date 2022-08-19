import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import themeSlice from './features/themeSlice';
import userSlice from './features/userSlice';

import rootSaga from './saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// disalbe thunk and add redux-saga middleware
const middleware = (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware);

// mount it on the Store
const store = configureStore({
    reducer: {
        themeMode: themeSlice,
        user: userSlice,
    },
    middleware,
});

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
