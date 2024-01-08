const Koa = require("koa");
const app = new Koa();
const registerRouter = require("./router");

registerRouter(app);

const port = 3030;
app.listen(port, () => {
  console.log(`server is running at port ${port}`);
});
