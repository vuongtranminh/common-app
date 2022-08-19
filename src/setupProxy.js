const { createProxyMiddleware } = require('http-proxy-middleware');

const options = {
    target: process.env.REACT_APP_WTS_API_URL, // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    secure: false,
    // pathRewrite: {
    //     '^/old/api' : '/new/api', // rewrite path
    //     '^/remove/api' : '', // remove base path
    //     '^/' : '/basepath/', // add base path
    // },
    logger: console,
    on: {
        proxyReq: (proxyReq, req, res) => {
            /* handle proxyReq */
        },
        proxyRes: (proxyRes, req, res) => {
            /* handle proxyRes */
        },
        error: (err, req, res) => {
            /* handle error */
        },
    },
};

module.exports = function (app) {
    app.use(process.env.REACT_APP_WTS_API_SUBFFIX, createProxyMiddleware(options));
};
