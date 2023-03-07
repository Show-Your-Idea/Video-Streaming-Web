import { getVideo } from "apis/video.api";
import { useQuery } from "react-query";

function Video() {
  const { isLoading, data } = useQuery("video", () => getVideo("S1", 1));
  return isLoading ? null : <video src={data} controls></video>;
}

export default Video;
