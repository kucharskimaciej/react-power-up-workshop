function answer() {
    return 42;
}

function greeting(name) {
    return () => `Hello, ${name}!`;
}

function fetchData(params, transformFn) {
    return function() {
        API.fetch(params)
            .then(result => transformFn(result));
    }
}
