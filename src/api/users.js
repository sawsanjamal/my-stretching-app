import { baseApi } from "./baseApi";

export function createUser(options) {
  return baseApi.post("users/create", options);
}
export async function login(options) {
  const {
    data: { token, user },
  } = await baseApi.post("login", options);
  return { token, user };
}
export async function authenticate() {
  return await baseApi.get("authenticate");
}
