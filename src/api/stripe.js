import { baseApi } from "./baseApi";
export async function createPayment(options) {
  const {
    data: { clientSecret },
  } = await baseApi.post("payments/create", options);

  return { clientSecret };
}
