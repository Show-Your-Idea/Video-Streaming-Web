import VideoControls from "components/VideoControls";
import { HIGH, LOW, MUTED } from "constants/volume.constant";
import { useDocumentEvent } from "hooks/useDocumentEvent.hook";
import React, { useCallback, useEffect, useRef, useState } from "react";
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
  // const [isScrubbing, setIsScrubbing] = useState(false);
  const isScrubbing = useRef(false);
  const timelineContainerRef = useRef<HTMLDivElement>(null);

  const [previewPosition, setPreviewPosition] = useState(0);
  const [progressPosition, setProgressPosition] = useState(0);
  const wasPaused = useRef(true);

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

  const toggleScrubbing = (e: React.MouseEvent | MouseEvent) => {
    const rect = timelineContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;

    isScrubbing.current = e.buttons === 1;
    videoContainerRef.current?.classList.toggle("scrubbing", isScrubbing.current);

    if (isScrubbing.current) {
      setProgressPosition(percent);
      wasPaused.current = videoRef.current?.paused ?? true;
      videoRef.current?.pause();
    } else {
      if (videoRef.current?.currentTime)
        videoRef.current.currentTime = percent * videoRef.current.duration;
      if (!wasPaused.current) videoRef.current?.play();
    }
    handleTimelineUpdate(e);
  };

  const handleTimelineUpdate = (e: React.MouseEvent | MouseEvent) => {
    const rect = timelineContainerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const percent = Math.min(Math.max(0, e.clientX - rect.x), rect.width) / rect.width;
    setPreviewPosition(percent);
    if (isScrubbing.current) {
      e.preventDefault();
      setProgressPosition(percent);
    }
  };

  useDocumentEvent("mouseup", (e: React.MouseEvent | MouseEvent) => {
    if (isScrubbing.current) toggleScrubbing(e);
  });
  useDocumentEvent("mousemove", (e: React.MouseEvent | MouseEvent) => {
    if (isScrubbing.current) handleTimelineUpdate(e);
  });

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
        handleTimelineUpdate={handleTimelineUpdate}
        toggleScrubbing={toggleScrubbing}
        isPaused={isPaused}
        volumeState={volumeState}
        previewPosition={previewPosition}
        progressPosition={progressPosition}
        timelineContainerRef={timelineContainerRef}
      />
    </S.VideoContainer>
  ) : null;
}

export default Video;
