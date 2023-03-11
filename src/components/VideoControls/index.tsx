import * as S from "./style";
import * as I from "assets/videoControls";
import { HIGH, LOW, MUTED } from "constants/volume.constant";
import React, { useState } from "react";

// import MiniPlayer from "assets/videoControls/miniPlayer.svg";

interface PropTypes {
  toggleVideoPlayPause: () => any;
  toggleVolumeMute: () => any;
  isPaused: boolean;
  volumeState: string;
}

function VideoControls({
  toggleVideoPlayPause,
  toggleVolumeMute,
  isPaused,
  volumeState,
}: PropTypes) {
  const [volume, setVolume] = useState(50);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };
  return (
    <S.ControlsContainer>
      <S.IconContainer onClick={toggleVideoPlayPause}>
        <S.Icon src={I.Play} display={isPaused} />
        <S.Icon src={I.Pause} display={!isPaused} />
      </S.IconContainer>
      <S.VolumeContainer>
        <S.VolumeSlider value={volume} onChange={onChange} type="range" />
        <S.IconContainer onClick={toggleVolumeMute}>
          <S.Icon src={I.VolmueHigh} display={volumeState === HIGH} />
          <S.Icon src={I.VolmueLow} display={volumeState === LOW} />
          <S.Icon src={I.VolmueMute} display={volumeState === MUTED} />
        </S.IconContainer>
      </S.VolumeContainer>
      <S.IconContainer>
        <S.Icon src={I.MiniPlayer} />
      </S.IconContainer>
    </S.ControlsContainer>
  );
}

export default VideoControls;
