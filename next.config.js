const cache = require('./utils/cache.js')
const withPWA = require('next-pwa')({
    dest: 'public',
    customWorkerDir: './utils/serviceworker',
    runtimeCaching: cache,
    disable: process.env.NODE_ENV !== 'production'
});

module.exports = withPWA({
    reactStrictMode: true
});