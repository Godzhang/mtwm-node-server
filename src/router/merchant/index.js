import Router from "koa-router";
const router = new Router();

router.get("/merchant/list", (ctx, next) => {
  const mList = [{ name: "黄焖鸡米饭", id: "dkslfjdsio" }];
  ctx.body = {
    code: 0,
    message: "成功",
    content: mList,
  };
});

router.get("/merchant/list/error", (ctx, next) => {
  const mList = [{ name: "黄焖鸡米饭", id: "dkslfjdsio" }];
  ctx.body = {
    code: 1,
    message: "失败",
    content: null,
  };
});

export default router;
