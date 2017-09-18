const path = require('path');
const fs = require('fs');

const React = require('react');
const {Provider} = require('react-redux');
const {renderToString} = require('react-dom/server');
const {StaticRouter, Route} = require('react-router-dom');

const {configureStore} = require('../src/store/index');
const {default: Board} = require('../src/components/Board/Board');
const {default: CardDetails} = require('../src/components/CardDetails/CardDetails');

module.exports = function renderApp(req, res) {
    const filePath = path.resolve(__dirname, '..', 'build', 'index.html');

    /* get the INITIAL_STATE) */

    fs.readFile(filePath, 'utf8', (err, indexHtml) => {
        const store = configureStore(INITIAL_STATE);
        const markup = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    <div>
                        <Route component={Board}/>
                        <Route path="/details/:id" component={CardDetails} />
                    </div>
                </StaticRouter>
            </Provider>
        );

        const App = indexHtml.replace('{{SSR}}', markup);
        res.send(App);
    });
};

