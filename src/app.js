import Koa from "koa";
import bodyParser from "koa-bodyparser";
import registerRouter from "./router/index.js";

const app = new Koa();

app.use(bodyParser());

registerRouter(app);

// 错误处理
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = "请求体解析失败";
  }
});

const port = 8002;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
