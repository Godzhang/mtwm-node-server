import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const successRes = (content, msg = "成功") => {
  const res = {
    code: 0,
    msg,
  };
  if (content != null) {
    res.content = content;
  }
  return res;
};

export const failRes = (msg = "失败") => {
  return {
    code: 1,
    msg,
  };
};

export const getDirname = (url) => dirname(fileURLToPath(url));
export const getFileName = (url) => path.basename(url);
export const getFileNameWithNoExt = (url) => path.basename(url).split(".")[0];
