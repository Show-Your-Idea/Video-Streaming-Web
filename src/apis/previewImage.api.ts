import { instance } from "./AxiosInstance";

export async function getVideo(season: string, episode: number) {
  const { data } = await instance.get("/preview_image", {
    headers: {},
    params: {
      season,
      episode,
    },
  });
  return data;
}
