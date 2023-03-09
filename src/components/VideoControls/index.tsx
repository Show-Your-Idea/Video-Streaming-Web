import { useKeyDown } from "hooks/useKeyDown.hook";
import React from "react";
import * as S from "./style";

interface PropTypes {
  handleVideoPlayPause: () => any;
}

function VideoControls({ handleVideoPlayPause }: PropTypes) {
  useKeyDown(["k", " "], handleVideoPlayPause);

  return (
    <S.ControlsContainer>
      <S.TimeLineContainer></S.TimeLineContainer>
      <S.Controls>
        <S.PlayPauseButton onClick={handleVideoPlayPause}>
          <S.PlayIcon viewBox="0 0 24 24">
            <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
          </S.PlayIcon>
          <S.PauseIcon viewBox="0 0 24 24">
            <path fill="currentColor" d="M14,19H18V5H14M6,19H10V5H6V19Z" />
          </S.PauseIcon>
        </S.PlayPauseButton>
      </S.Controls>
    </S.ControlsContainer>
  );
}

export default VideoControls;
