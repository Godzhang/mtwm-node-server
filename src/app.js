const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new Koa();
const registerRouter = require("./router");

registerRouter(app);

app.use(bodyParser());

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
