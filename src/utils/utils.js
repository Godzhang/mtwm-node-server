export const successRes = (content, msg = "成功") => {
  return {
    code: 0,
    msg,
    content,
  };
};

export const failRes = (msg) => {
  return {
    code: 1,
    msg,
  };
};

export const generateToken = ({ session_key, openid }) => {
  return session_key + openid;
};
