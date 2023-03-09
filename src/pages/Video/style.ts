import styled from "styled-components";
import { ControlsContainer, PauseIcon, PlayIcon } from "components/VideoControls/style";

export const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-inline: auto;

  &:hover ${ControlsContainer}, &.paused ${ControlsContainer}, &.focus-within ${ControlsContainer} {
    opacity: 1;
  }

  &.paused ${PauseIcon} {
    display: none;
  }

  &:not(.paused) ${PlayIcon} {
    display: none;
  }
`;

export const Video = styled.video`
  width: 100%;
`;
