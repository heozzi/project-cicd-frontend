const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/v1", {
            target: "http://34.213.12.30:8080",
            changeOrigin: true,
        })
    );
};