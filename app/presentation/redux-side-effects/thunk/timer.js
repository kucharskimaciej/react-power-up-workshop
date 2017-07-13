/* imports, setup, middleware */

function timerStart(timerId) {
    return { type: 'TIMER_START', timerId };
}

function timerEnd() {
    return { type: 'TIMER_END' };
}

function runTimer(delay) {
    return function(dispatch) {
        const timerId = setTimeout(() => {
            dispatch(timerEnd());
        }, delay * 1000);

        dispatch(timerStart(timerId));
    };
}

store.dispatch(runTimer(5));
