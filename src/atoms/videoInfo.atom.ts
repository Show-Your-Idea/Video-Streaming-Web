import { atom } from "recoil";

type AtomTypes = {
  season: string;
  episode: string;
};

export const videoInfo = atom<AtomTypes>({
  key: "videoInfo",
  default: {
    season: "",
    episode: "",
  },
});
