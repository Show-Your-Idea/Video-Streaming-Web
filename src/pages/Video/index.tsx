import VideoControls from "components/VideoControls";
import { HIGH, LOW, MUTED } from "constants/volume.constant";
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
  const [volumeState, setVolumeState] = useState(HIGH);

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

  const changeVolumeState = () => {
    if (!(videoRef.current instanceof HTMLVideoElement)) return;
    if (videoRef.current.volume > 0.5) {
      setVolumeState(HIGH);
    } else if (videoRef.current.volume > 0) {
      setVolumeState(LOW);
    } else {
      setVolumeState(MUTED);
    }
  };

  const toggleMute = () => {
    if (!(videoRef.current instanceof HTMLVideoElement)) return;
    videoRef.current.muted = !videoRef.current.muted;
    if (videoRef.current.muted) setVolumeState(MUTED);
    else {
      changeVolumeState();
    }
  };

  const handleChangeVolume = (volume: number) => {
    if (!(videoRef.current instanceof HTMLVideoElement)) return;

    videoRef.current.volume = volume / 100;
    videoRef.current.muted = volume === 0;
    changeVolumeState();
  };

  return season && episode ? (
    <S.VideoContainer ref={videoContainerRef} className="paused">
      <S.Video
        ref={videoRef}
        src={`${process.env.REACT_APP_BASE_URL}/video?season=${season}&episode=${episode}`}
        onClick={toggleVideoPlayPause}
      ></S.Video>
      <VideoControls
        toggleVideoPlayPause={toggleVideoPlayPause}
        toggleMute={toggleMute}
        handleChangeVolume={handleChangeVolume}
        isPaused={isPaused}
        volumeState={volumeState}
      />
    </S.VideoContainer>
  ) : null;
}

export default Video;
