const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(
    "/services/bankpro",
    proxy({
      target: "http://localhost:8080",
      changeOrigin: true
    })
  );
};
