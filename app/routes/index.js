import fs from "fs";
import helloRouter from "./hello.js";
import merchantRouter from "./merchant.js";
import authRouter from "./auth.js";
import { getDirname } from "../utils/utils.js";

function registerRouter(app) {
  // TODO: 自动注册路由
  const files = fs.readdirSync(getDirname(import.meta.url));
  files.forEach(async (file) => {
    if (file === "index.js") return;
    const router = (await import(`./${file}`)).default;
    app.use(router.routes()).use(router.allowedMethods());
  });
}

export default registerRouter;
