import { instance } from "./AxiosInstance";

export async function getVideo(season: string, episode: number) {
  const { data } = await instance.get("/video", {
    headers: {
      "Content-Type": "video/mp4",
      Range: "bytes=0-",
    },
    params: {
      season,
      episode,
    },
  });
  return data;
}
