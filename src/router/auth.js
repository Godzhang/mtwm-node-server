const Router = require("koa-router");
const router = new Router();

// https://api.weixin.qq.com/sns/jscode2session?appid=wxdc154f548e6f7da3&secret=aedc0cee96fe85e2422613def5bb3d6f&js_code=0d3KRi1w3tw04239Q44w3XxKS14KRi1L&grant_type=authorization_code

// 返回值
// {"session_key":"Wg4Uzdkxrdvf+UAfK82jyQ==","openid":"omRz94645Y_0_d5Gkz_KhsxHASUo"}

router.get("/weapp/login", (ctx) => {
  const { code } = ctx.request.body;

  // ctx.body = {
  //   code: 0,
  //   data: {

  //   }
  // };
});
