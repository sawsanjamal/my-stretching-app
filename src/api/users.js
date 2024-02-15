import { baseApi } from "./baseApi";

export function createUser(options) {
  return baseApi.post("users/create", options);
}
export async function login(options) {
  const {
    data: { user },
  } = await baseApi.post("login", options);
  return { user };
}
export async function authenticate() {
  const {
    data: { user },
  } = await baseApi.get("authenticate");
  return { user };
}

export async function clearCookies() {
  return await baseApi.get("logout");
}
export async function addProfilePicture(options) {
  const {
    data: { user },
  } = await baseApi.put("profilepicture", options);
  return { user };
}
export async function toggleLike(options) {
  const {
    data: { user },
  } = await baseApi.put("users/stretches", options);
  return { user };
}
export async function toggleLikeArticle(options) {
  const {
    data: { user },
  } = await baseApi.put("users/articles", options);
  return { user };
}
