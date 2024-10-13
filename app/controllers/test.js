import { mainMenu, subMenu } from "../data/home.js";
import { failRes, successRes } from "../utils/utils.js";

class TestController {
  getParams(ctx) {
    const { query } = ctx.request;
    ctx.body = successRes(query);
  }
  getData(ctx) {
    const { body } = ctx.request;
    ctx.body = successRes(body);
  }
}

const testController = new TestController();

export default testController;
