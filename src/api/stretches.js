import { baseApi } from "./baseApi";
export async function getStretches() {
  const {
    data: { stretches },
  } = await baseApi.get("stretches");

  return { stretches };
}
