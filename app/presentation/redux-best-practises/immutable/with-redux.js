import {Map, fromJS} from 'immutable';

const defaultState = Map();

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'UPDATE_STATE':
            return state.merge(action.payload);

        case 'ADD_ITEM':
            const items = state.get('items')
                .push(Map(action.payload));

            return state.merge({ items });

        default:
            return state;
    }
}
