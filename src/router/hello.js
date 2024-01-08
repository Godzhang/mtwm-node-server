const Router = require("koa-router");
const router = new Router();

router.get("/hello/router", (ctx, next) => {
  ctx.body = {
    key: "hello world",
  };
});

router.get("/hello/world", (ctx, next) => {
  ctx.body = {
    key: "gzyzl",
  };
});

module.exports = router;
