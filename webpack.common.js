const path = require('path');
module.exports = {
    entry: ['babel-polyfill', path.resolve(__dirname, './src/js/main.js')],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
}