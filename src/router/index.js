const Router = require("koa-router");
const requireDirectory = require("require-directory");

function registerRouter(app) {
  requireDirectory(module, {
    visit: (obj) => {
      if (obj instanceof Router) {
        app.use(obj.routes());
      }
    },
  });
}

module.exports = registerRouter;
