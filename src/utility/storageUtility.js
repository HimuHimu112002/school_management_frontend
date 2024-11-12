import Cookies from "js-cookie";
export function setUserRoll(roll) {
  localStorage.setItem("roll", roll);
}
export function GetUserRoll() {
  return localStorage.getItem("roll");
}
export function setToken(token) {
  console.log(token)
  return Cookies.set("token", token);
}
export function getToken() {
  return Cookies.get("token");
}
export function clearToken() {
  return Cookies.remove("token");
}
