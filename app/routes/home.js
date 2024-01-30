import Router from "koa-router";
import homeController from "../controllers/home.js";
import auth from "../middlewares/auth.js";

const router = new Router({ prefix: "/home" });
const { menuList } = homeController;

router.get("/menu/list", menuList);

export default router;
