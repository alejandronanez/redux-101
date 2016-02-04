console.log(process.env.NODE_ENV);
console.log(process.env.BABEL_ENV);

var getConfig = require('hjs-webpack');

var config = getConfig({
    in : 'src/app.js',
    out: 'public',
    clearBeforeBuild: false
});

module.exports = config;
