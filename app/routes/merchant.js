import Router from "koa-router";
import merchantController from "../controllers/merchant.js";
import auth from "../middlewares/auth.js";

const router = new Router({ prefix: "/merchant" });
const { list, listError } = merchantController;

router.get("/list", list);

router.get("/list/error", auth, listError);

export default router;
