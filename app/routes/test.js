import Router from "koa-router";
import testController from "../controllers/test.js";
const router = new Router({ prefix: "/test" });

const { getParams, getData } = testController;

router.get("/get/params", getParams);

router.post("/post/data", getData);

export default router;
