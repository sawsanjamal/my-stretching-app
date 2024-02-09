import { baseApi } from "./baseApi";
export async function getArticles() {
  const {
    data: { articles },
  } = await baseApi.get("articles");

  return { articles };
}
