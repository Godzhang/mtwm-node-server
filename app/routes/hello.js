import Router from "koa-router";
const router = new Router({ prefix: "/hello" });

router.get("/router", (ctx, next) => {
  ctx.body = {
    key: "hello world",
  };
});

router.get("/world", (ctx, next) => {
  ctx.body = {
    key: "gzyzl",
  };
});

export default router;
