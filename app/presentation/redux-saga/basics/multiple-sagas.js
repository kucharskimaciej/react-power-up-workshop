/** SAGAS/INDEX.JS **/
import { all } from `redux-saga/effects`;

import {sagaA} from './sagaA';
import {sagaB} from './sagaB';
/* ... */

export function* rootSaga() {
    yield all([
        sagaA(),
        sagaB(),
        /* ... */
    ])
}

/** STORE.JS **/
import {rootSaga} from "./sagas"

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    /* reducer, */
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
