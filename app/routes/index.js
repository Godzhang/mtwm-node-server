import fs from "fs";
import { getDirname } from "../utils/utils.js";

function registerRouter(app) {
  const files = fs.readdirSync(getDirname(import.meta.url));
  files.forEach(async (file) => {
    if (file === "index.js") return;
    const router = (await import(`./${file}`)).default;
    app.use(router.routes()).use(router.allowedMethods());
  });
}

export default registerRouter;
