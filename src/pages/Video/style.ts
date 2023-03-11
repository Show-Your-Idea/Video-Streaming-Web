import styled from "styled-components";
import * as I from "components/VideoControls/style";

export const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  background-color: black;

  &:hover
    ${I.ControlsContainer},
    &.paused
    ${I.ControlsContainer},
    &.focus-within
    ${I.ControlsContainer} {
    opacity: 1;
  }

  &.paused ${I.PauseIcon} {
    display: none;
  }

  &:not(.paused) ${I.PlayIcon} {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    width: calc(100% + 1px);
    aspect-ratio: 6 / 1;
    z-index: 1;
    pointer-events: none;
  }

  &.theater,
  &.full-screen {
    max-width: initial;
    width: 100%;
  }

  &.theater {
    max-height: 80vh;
  }

  &.full-screen {
    max-height: 100vh;
  }

  &.theater ${I.IconButton}.theater-btn ${I.TallIcon} {
    display: none;
  }

  &:not(.theater) ${I.IconButton}.theater-btn ${I.WideIcon} {
    display: none;
  }

  &.full-screen ${I.IconButton}.full-screen-btn ${I.OpenIcon} {
    display: none;
  }
  &.full-screen {
    ${I.IconButton}.theater-btn, ${I.IconButton}.mini-player-btn {
      display: none;
    }
  }

  &:not(.full-screen) ${I.IconButton}.full-screen-btn ${I.CloseIcon} {
    display: none;
  }

  &[data-volume-level="high"] ${I.VolumeHighIcon} {
    display: block;
  }
  &[data-volume-level="low"] ${I.VolumeLowIcon} {
    display: block;
  }
  &[data-volume-level="muted"] ${I.VolumeMutedIcon} {
    display: block;
  }
`;

export const Video = styled.video`
  width: 100%;
`;
