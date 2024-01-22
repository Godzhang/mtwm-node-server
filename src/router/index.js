import merchantRouter from "./merchant/index.js";
import authRouter from "./auth.js";

function registerRouter(app) {
  app.use(merchantRouter.routes());
  app.use(authRouter.routes());
}

export default registerRouter;

// import Router from "koa-router";
// import requireDirectory from "require-directory";

// function registerRouter(app) {
//   requireDirectory(module, {
//     visit: (obj) => {
//       if (obj instanceof Router) {
//         app.use(obj.routes());
//       }
//     },
//   });
// }

// export default registerRouter;
