import { instance } from "./AxiosInstance";

export async function getList() {
  const { data } = await instance.get("/list");
  data.seasons.sort((a: string, b: string) => {
    return a === "Sp" ? -1 : b === "Sp" ? 1 : a > b ? 1 : -1;
  });
  data.seasons.forEach((season: string) => {
    data[season.toLowerCase()].sort((a: string, b: string) => {
      return +a > +b ? 1 : -1;
    });
  });
  return data;
}
