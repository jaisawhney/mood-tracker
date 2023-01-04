const cache = require('./utils/cache.js')
const withPWA = require('next-pwa')({
    dest: 'public',
    customWorkerDir: './utils/serviceworker',
    runtimeCaching: cache
});

module.exports = withPWA({
    reactStrictMode: true
});