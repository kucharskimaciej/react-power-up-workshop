import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import {history, store} from "./store"

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)

