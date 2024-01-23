import jwt from "jsonwebtoken";
import { tokenConfig } from "../config/index.js";

const { secret, expires } = tokenConfig;

export const generateToken = (wxInfo) => {
  const token = jwt.sign(wxInfo, secret, {
    expiresIn: `${expires}`,
  });
  return token;
};
