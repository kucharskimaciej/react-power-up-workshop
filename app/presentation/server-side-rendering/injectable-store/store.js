/** STORE **/
export function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer,
        initialState,
        /* middlewares */
    );

    return store;
}


/** APP **/
// import {store} from '../store';
import {configureStore} from '../store';
const store = configureStore(/* initial state */);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                /* application code */
            </Provider>
        );
    }
}
