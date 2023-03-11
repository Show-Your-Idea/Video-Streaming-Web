import * as S from "./style";
import * as I from "assets/videoControls";
import { HIGH, LOW, MUTED } from "constants/volume.constant";
import { useInputRange } from "hooks/useInputRange.hook";

// import MiniPlayer from "assets/videoControls/miniPlayer.svg";

interface PropTypes {
  toggleVideoPlayPause: () => any;
  toggleMute: () => any;
  handleChangeVolume: (volume: number) => any;
  isPaused: boolean;
  volumeState: string;
}

function VideoControls({
  toggleVideoPlayPause,
  toggleMute,
  handleChangeVolume,
  isPaused,
  volumeState,
}: PropTypes) {
  const volume = useInputRange(100, handleChangeVolume);

  return (
    <S.ControlsContainer>
      <S.IconContainer onClick={toggleVideoPlayPause} style={{ marginLeft: 8 }}>
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
      <S.IconContainer>
        <S.Icon src={I.MiniPlayer} />
      </S.IconContainer>
    </S.ControlsContainer>
  );
}

export default VideoControls;
