/** CLIENT **/
function addProduct(product) {
    return {
        type: 'SERVER/ADD_PRODUCT',
        payload: product
    };
}

store.dispatch(addProduct({ /* product */ }));

/** SERVER **/
socket.on('action', (action) => {
    switch (action.type) {
        case 'SERVER/ADD_PRODUCT':
            /* handle adding product */
    }
});
