import UAuth from "@uauth/js";

const uauth = new UAuth({
  clientID: "2474cIj8BXsrcW63EZVpQnTcvRxeXQy1L06ZEIHuPMY=",
  clientSecret: "j57CAjaoqRi3Z7LsFII95FxPX3LJ/3JY5SOU0xnsyho=",
  redirectUri: "http://localhost:3000/callback",
  scope: "openid wallet",
});

export const login = async () => {
  try {
    await uauth.loginWithPopup();
    return true;
  } catch (err) {
    return false;
  }
};

export const logout = async () => {
  try {
    await uauth.logout();
    return true;
  } catch (err) {
    return false;
  }
};

export const getUser = async () => {
  try {
    return await uauth.user();
  } catch (err) {
    console.log(err);
    return false;
  }
};
