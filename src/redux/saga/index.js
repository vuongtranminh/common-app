import { call, takeEvery, put } from 'redux-saga/effects';
import Axios from 'axios';
import { action1 } from '~/redux/one-slide';
import { sagaActions } from './sagaActions';

// let callAPI = async ({ url, method, data }) => {
//     return await Axios({
//         url,
//         method,
//         data,
//     });
// };

export function* setThemeMode({ payload }) {
    try {
        const themeMode = payload.themeMode;
        localStorage.setItem('themeMode', JSON.stringify(themeMode));
        yield put(setMode(themeMode));
    } catch (e) {
        // yield put({ type: 'TODO_FETCH_FAILED' });
    }
}

export default function* rootSaga() {
    yield takeEvery(sagaActions.SET_THEME_SAGA, setThemeMode);
}
