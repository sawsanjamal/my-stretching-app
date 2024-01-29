import { baseApi } from "./baseApi";

export function createUser(options) {
  return baseApi.post("users/create", options);
}
