/** CONSOLE **/
npm install --save socket.io
npm install --save redux-socket.io

/** STORE.JS **/
import { createStore, applyMiddleware } from 'redux';

import createSocketIoMiddleware from 'redux-socket.io';
import io from 'socket.io-client';
let socket = io(SOCKET_ADDRESS);
let socketIoMiddleware = createSocketIoMiddleware(socket, "SERVER/");

const store = createStore(
    /* reducers, */
    applyMiddleware(socketIoMiddleware)
);
