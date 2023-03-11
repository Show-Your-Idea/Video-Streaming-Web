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

    document.addEventListener("fullscreenchange", () => {
      videoContainerRef.current?.classList.toggle("full-screen", !!document.fullscreenElement);
    });
    videoRef.current?.addEventListener("enterpictureinpicture", () => {
      videoContainerRef.current?.classList.add("mini-player");
    });
    videoRef.current?.addEventListener("leavepictureinpicture", () => {
      videoContainerRef.current?.classList.remove("mini-player");
    });
  }, []);

  const handleVideoPlayPause = () => {
    const tagName = document.activeElement?.tagName.toLowerCase();
    if (tagName === "input") return;
    videoRef.current?.paused ? videoRef.current.play() : videoRef.current?.pause();
  };

  const onPlay = () => {
    videoContainerRef.current?.classList.remove("paused");
  };
  const onPause = () => {
    videoContainerRef.current?.classList.add("paused");
  };

  const toggleMiniPlayerMode = () => {
    if (videoContainerRef.current?.classList.contains("mini-player")) {
      document.exitPictureInPicture();
    } else {
      videoRef.current?.requestPictureInPicture();
    }
  };
  const toggleTheaterMode = () => {
    console.log(document.fullscreenElement);
    if (document.fullscreenElement != null) {
      console.log("test");
      videoContainerRef.current?.classList.add("theater");
      document.exitFullscreen();
      return;
    }
    videoContainerRef.current?.classList.toggle("theater");
  };
  const toggleFullScreenMode = () => {
    if (document.fullscreenElement == null) {
      videoContainerRef.current?.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return season && episode ? (
    <S.VideoContainer ref={videoContainerRef} className="paused" data-volume-level="high">
      <S.Video
        ref={videoRef}
        src={`${process.env.REACT_APP_BASE_URL}/video?season=${season}&episode=${episode}`}
        onPlay={onPlay}
        onPause={onPause}
        onClick={handleVideoPlayPause}
      ></S.Video>
      <VideoControls
        handleVideoPlayPause={handleVideoPlayPause}
        toggleMiniPlayerMode={toggleMiniPlayerMode}
        toggleTheaterMode={toggleTheaterMode}
        toggleFullScreenMode={toggleFullScreenMode}
      />
    </S.VideoContainer>
  ) : null;
}

export default Video;
