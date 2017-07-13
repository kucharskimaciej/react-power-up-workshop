/** SERVER **/
socket.emit('action', {
    type: 'ADD_PRODUCT',
    payload: { /* product */ }
});


/** CLIENT **/

function productsReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];

        default:
            return state;
    }
}
