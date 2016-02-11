var path = require('path');
var createConfig = require('hjs-webpack');
var config = createConfig({
    in : 'src/app.js',
    out: 'public',
    clearBeforeBuild: false
});

/**
 * This way we can do something like:
 * import MyComponent from '~/components/my/sub/directory/to/a/component';
 * instead of
 * import MyComponent from '../../../../../my/sub/directory/to/a/component';
 */
config.resolve.alias = {
    '~': path.resolve(__dirname, 'src')
};

module.exports = config;
