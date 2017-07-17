if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('service-worker.js')
            .then(function (registration) {
                // registration successful
            }).catch(function (err) {
                console.log('ServiceWorker registration failed: ', err)
            });
    });
}
