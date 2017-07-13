// npm install --save redux-saga

import { createStore, applyMiddleware } from 'redux'

import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    /* reducer, */
    applyMiddleware(sagaMiddleware)
);

function* greeterSaga() {
    console.log('Greetings!')
}

sagaMiddleware.run(greeterSaga);

