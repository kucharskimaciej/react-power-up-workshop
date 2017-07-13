/** ACTION CREATORS **/
function timerStart(time) {
    return { type: 'TIMER_START', time };
}

function timerEnd() {
    return { type: 'TIMER_END' };
}

/** SAGAS **/

import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';

function* timerSaga() {
    yield takeEvery('TIMER_START', runTimer);
}

function* runTimer(action) {
    yield delay(action.time * 1000);
    yield put(timerEnd())
}


/** STORE **/
sagaMiddleware.run(timerSaga);

store.dispatch(timerStart(30));
