import jsonwebtoken from "jsonwebtoken";
import jwt from "koa-jwt";
import { tokenConfig } from "../config/index.js";

// 使用 koa-jwt
const auth = jwt({ secret: tokenConfig.secret });

// 自己实现版本
// const auth = async (ctx, next) => {
//   const { authorization = "" } = ctx.request.header;
//   const token = authorization.split(" ")[1];
//   try {
//     const user = jsonwebtoken.verify(token, tokenConfig.secret);
//     ctx.state.user = user;
//   } catch (error) {
//     ctx.throw(401, error.message);
//   }
//   await next();
// };

export default auth;
