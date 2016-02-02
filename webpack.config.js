var getConfig = require('hjs-webpack');

var config = getConfig({
    in : 'src/app.js',
    out: 'public',
    clearBeforeBuild: false
});

module.exports = config;
