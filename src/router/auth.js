import axios from "axios";
import Router from "koa-router";
import { authConfig } from "../config/index.js";
import { successRes, failRes, generateToken } from "../utils/utils.js";
const router = new Router();

// https://api.weixin.qq.com/sns/jscode2session?appid=wxdc154f548e6f7da3&secret=aedc0cee96fe85e2422613def5bb3d6f&js_code=0d3KRi1w3tw04239Q44w3XxKS14KRi1L&grant_type=authorization_code

// 返回值
// {"session_key":"Wg4Uzdkxrdvf+UAfK82jyQ==","openid":"omRz94645Y_0_d5Gkz_KhsxHASUo"}

router.post("/auth/login", async (ctx) => {
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
    console.log("res:", res.data);
    const token = generateToken(res.data);
    ctx.body = successRes(token);
  } catch (error) {
    ctx.body = failRes(error.message);
  }
});

export default router;
