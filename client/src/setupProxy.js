import { createProxyMiddleware } from "http-proxy-middleware";

module.exports = function (app) {
    app.use(
        createProxyMiddleware("/api/data", {
            target: "http://localhost:7777",
            changeOrigin: true,
        })
    );
};