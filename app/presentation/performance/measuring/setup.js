// npm install --save-dev react-addons-perf
if (process.env.NODE_ENV !== 'production') {
    window.Perf = require('react-addons-perf');
}

/* ... */


/* BROWSER CONSOLE */
> Perf.start()
/* ... */
> Perf.stop();
> Perf.getLastMeasurements();
> Perf.printExclusive();
> Perf.printWasted();

