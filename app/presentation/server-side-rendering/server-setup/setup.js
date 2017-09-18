// yarn add ignore-styles babel-register express

require('ignore-styles');
require('babel-register')({
    ignore: /\/(build|node_modules)\//,
    presets: ['env', 'react-app']
});

const express = require('express');
const path = require('path');

const app = express();

app.get('/', require('./render'));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.use('/', require('./render'));


const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}!`)
});
