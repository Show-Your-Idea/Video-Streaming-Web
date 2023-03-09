import VideoControls from "components/VideoControls";
import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./style";

function Video() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const season = searchParams.get("season");
  const episode = searchParams.get("episode");

  useEffect(() => {
    if (!season || !episode) {
      navigate("/");
    }
  }, []);

  const handleVideoPlayPause = () => {
    if (videoRef.current === null) return;
    videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
  };

  const onPlay = () => {
    if (videoContainerRef.current !== null) videoContainerRef.current.classList.remove("paused");
  };
  const onPause = () => {
    if (videoContainerRef.current !== null) videoContainerRef.current.classList.add("paused");
  };

  return season && episode ? (
    <S.VideoContainer ref={videoContainerRef} className="paused">
      <S.Video
        ref={videoRef}
        src={`${process.env.REACT_APP_BASE_URL}/video?season=${season}&episode=${episode}`}
        onPlay={onPlay}
        onPause={onPause}
        onClick={handleVideoPlayPause}
      ></S.Video>
      <VideoControls handleVideoPlayPause={handleVideoPlayPause} />
    </S.VideoContainer>
  ) : null;
}

export default Video;
