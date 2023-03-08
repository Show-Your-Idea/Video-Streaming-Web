import { videoInfo } from "atoms/videoInfo.atom";
import { useRecoilValue } from "recoil";

function Video() {
  const { season, episode } = useRecoilValue(videoInfo);

  return season && episode ? (
    <video
      width={500}
      src={`${process.env.REACT_APP_BASE_URL}/video?season=${season}&episode=${episode}`}
      controls
    ></video>
  ) : (
    <div>Wrong Access</div>
  );
}

export default Video;
