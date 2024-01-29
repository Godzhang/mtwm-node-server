import fs from "fs";
import { getDirname, getFileNameWithNoExt } from "../utils/utils.js";
import { glob } from "glob";
import path from "path";

async function registerRouter(app) {
  // glob
  const filename = getFileNameWithNoExt(import.meta.url);
  const files = await glob(`app/routes/!(${filename}).js`);
  for (let i = 0; i < files.length; i++) {
    const filename = path.basename(files[i]);
    const router = (await import(`./${filename}`)).default;
    app.use(router.routes()).use(router.allowedMethods());
  }
  // fs
  // const files = fs.readdirSync(getDirname(import.meta.url));
  // files.forEach(async (file) => {
  //   if (file === "index.js") return;
  //   const router = (await import(`./${file}`)).default;
  //   app.use(router.routes()).use(router.allowedMethods());
  // });
}

export default registerRouter;
