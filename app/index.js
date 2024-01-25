import { resolve } from "path";
import Koa from "koa";
import bodyParser from "koa-bodyparser";
import koaStatic from "koa-static";
import registerRouter from "./routes/index.js";
import { getDirname } from "./utils/utils.js";

const app = new Koa();

// 错误处理
// TODO: 为什么加了全局错误处理，jwt验证的错误会走到这里，不想走这里该怎么做
// app.use(async (ctx, next) => {
//   try {
//     await next();
//   } catch (err) {
//     console.log("err: ", err);
//     ctx.status = 400;
//     ctx.body = "请求体解析失败";
//   }
// });

app.use(koaStatic(resolve(getDirname(import.meta.url), "../static")));
app.use(bodyParser());

registerRouter(app);

const port = 8002;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
