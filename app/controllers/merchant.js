import { failRes } from "../utils/utils.js";

class MerchantController {
  list(ctx) {
    try {
      const mList = [{ name: "黄焖鸡米饭", id: "dkslfjdsio" }];
      ctx.body = {
        code: 0,
        message: "成功",
        content: mList,
      };
    } catch (error) {
      ctx.throw(500, error.message);
    }
  }
  listError(ctx) {
    ctx.body = failRes();
  }
}

const merchantController = new MerchantController();

export default merchantController;
