import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(
    /* reducers, */
    applyMiddleware(thunk)
);

function greet(name) {
    return { type: 'GREET', name }
}

function hello(name) {
    return function (dispatch) {
        dispatch(greet('Maciej'));
    };
}
