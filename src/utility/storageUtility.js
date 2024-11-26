import Cookies from "js-cookie";
export function setUserRoll(roll) {
  localStorage.setItem("roll", roll);
}
export function GetUserRoll() {
  return localStorage.getItem("roll");
}
export function RemoveUserRoll() {
  return localStorage.removeItem("roll");
}
export function setUserInfo(user) {
  return localStorage.setItem("userInfo", user);
}
export function setToken(token) {
  return Cookies.set("token", token);
}
export function getToken() {
  return Cookies.get("token");
}
export function clearToken() {
  return Cookies.remove("token");
}
export function getAuth() {
  return Cookies.get("connect.sid");
}
