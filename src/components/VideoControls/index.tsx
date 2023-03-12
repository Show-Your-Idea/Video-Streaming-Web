import * as S from "./style";
import * as I from "assets/videoControls";
import { HIGH, LOW, MUTED } from "constants/volume.constant";
import { useInputRange } from "hooks/useInputRange.hook";
import React, { useEffect, useRef } from "react";

interface PropTypes {
  toggleVideoPlayPause: () => void;
  toggleMute: () => void;
  handleChangeVolume: (volume: number) => void;
  handleTimelineUpdate: (e: React.MouseEvent) => void;
  toggleScrubbing: (e: React.MouseEvent) => void;
  isPaused: boolean;
  volumeState: string;
  previewPosition: number;
  progressPosition: number;
  timelineContainerRef: React.Ref<HTMLDivElement>;
}

const VideoControls = ({
  toggleVideoPlayPause,
  toggleMute,
  handleChangeVolume,
  handleTimelineUpdate,
  toggleScrubbing,
  isPaused,
  volumeState,
  previewPosition,
  progressPosition,
  timelineContainerRef,
}: PropTypes) => {
  const volume = useInputRange(100, handleChangeVolume);
  return (
    <S.ControlsContainer>
      <S.IconContainer onClick={toggleVideoPlayPause}>
        <S.Icon src={I.Play} isDisplay={isPaused} />
        <S.Icon src={I.Pause} isDisplay={!isPaused} />
      </S.IconContainer>

      <S.VolumeContainer>
        <S.VolumeSlider {...volume} type="range" />
        <S.IconContainer onClick={toggleMute}>
          <S.Icon src={I.VolmueHigh} isDisplay={volumeState === HIGH} />
          <S.Icon src={I.VolmueLow} isDisplay={volumeState === LOW} />
          <S.Icon src={I.VolmueMute} isDisplay={volumeState === MUTED} />
        </S.IconContainer>
      </S.VolumeContainer>

      <S.TimelineContainer
        ref={timelineContainerRef}
        onMouseMove={handleTimelineUpdate}
        onMouseDown={toggleScrubbing}
      >
        <S.Timeline previewPosition={previewPosition} progressPosition={progressPosition}>
          <S.TimelineIndicator progressPosition={progressPosition}></S.TimelineIndicator>
        </S.Timeline>
      </S.TimelineContainer>

      <S.IconContainer>
        <S.Icon src={I.MiniPlayer} />
      </S.IconContainer>
    </S.ControlsContainer>
  );
};

export default VideoControls;
