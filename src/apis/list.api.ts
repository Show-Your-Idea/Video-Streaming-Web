import { instance } from "./AxiosInstance";

export async function getList() {
  const { data } = await instance.get("/list");
  return data;
}
