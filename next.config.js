const withPWA = require('next-pwa')({
    dest: 'public',
    customWorkerDir: './utils/serviceworker'
})

module.exports = withPWA({
    reactStrictMode: true
})