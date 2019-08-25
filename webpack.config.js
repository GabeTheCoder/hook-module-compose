
const fs = require('fs');

const js = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/
};

const nodeModules = {};

fs.readdirSync('node_modules').filter((nodeModuleDir) => {
    return ['.bin'].indexOf(nodeModuleDir) === -1;
}).forEach((nodeModule) => {
    nodeModules[nodeModule] = 'commonjs ' + nodeModule;
});

const config = {
    entry: './src/index',
    target: 'node',
    output: { path: __dirname + '/dist', filename: 'index.js' },
    module: { rules: [js] },
    stats: { children: false },
    externals: nodeModules
};

module.exports = [config];