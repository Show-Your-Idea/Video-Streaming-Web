import VideoControls from "components/VideoControls";
import { LOW, MUTED } from "constants/volume.constant";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./style";

function Video() {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();
  const searchParams = useSearchParams()[0];
  const season = searchParams.get("season");
  const episode = searchParams.get("episode");

  const [isPaused, setIsPaused] = useState(true);
  const [volumeState, setVolumeState] = useState(MUTED);

  useEffect(() => {
    if (!season || !episode) {
      navigate("/");
      return;
    }

    videoContainerRef.current?.requestFullscreen();
    videoRef.current?.pause();
  }, []);

  const toggleVideoPlayPause = () => {
    videoRef.current?.paused ? videoRef.current.play() : videoRef.current?.pause();
    setIsPaused((prev) => !prev);
  };

  const toggleVolumeMute = () => {
    setVolumeState(LOW);
  };

  return season && episode ? (
    <S.VideoContainer ref={videoContainerRef} className="paused" data-volume-level="high">
      <S.Video
        ref={videoRef}
        src={`${process.env.REACT_APP_BASE_URL}/video?season=${season}&episode=${episode}`}
        onClick={toggleVideoPlayPause}
      ></S.Video>
      <VideoControls
        toggleVideoPlayPause={toggleVideoPlayPause}
        toggleVolumeMute={toggleVolumeMute}
        isPaused={isPaused}
        volumeState={volumeState}
      />
    </S.VideoContainer>
  ) : null;
}

export default Video;
