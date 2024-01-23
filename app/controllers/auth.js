import axios from "axios";
import { authConfig } from "../config/index.js";
import { generateToken } from "../utils/token.js";
import { failRes, successRes } from "../utils/utils.js";

class AuthController {
  async login(ctx) {
    const { code } = ctx.request.body;

    try {
      const res = await axios({
        url: "https://api.weixin.qq.com/sns/jscode2session",
        method: "GET",
        params: {
          appid: authConfig.appid,
          secret: authConfig.secret,
          js_code: code,
          grant_type: "authorization_code",
        },
      });
      const token = generateToken(res.data);
      ctx.body = successRes(token, "登录成功");
    } catch (error) {
      ctx.body = failRes(error.message);
    }
  }
}

const authController = new AuthController();

export default authController;
