/* INSTALLATION */
// npm install --save react-router-redux@next
// npm install --save history

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';

export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
    combineReducers({
        /* ...reducers, */
        router: routerReducer
    }),
    applyMiddleware(middleware)
)
