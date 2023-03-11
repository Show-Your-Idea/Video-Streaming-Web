import styled from "styled-components";

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 100;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
`;

export const TimeLineContainer = styled.div``;

export const Controls = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.25rem;
  align-items: center;
`;

export const IconButton = styled.button`
  color: inherit;
  width: 30px;
  height: 30px;
  font-size: 1.1rem;
  opacity: 0.85;
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const PlayIcon = styled.svg``;

export const PauseIcon = styled.svg``;

export const TallIcon = styled.svg``;

export const WideIcon = styled.svg``;

export const OpenIcon = styled.svg``;

export const CloseIcon = styled.svg``;

export const VolumeSlider = styled.input`
  background-color: none;
  width: 0;
  transition: width 100ms ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  cursor: pointer;
  background-color: transparent;
  height: 30px;
  display: flex;

  &::-webkit-slider-runnable-track {
    background-color: white;
    height: 3px;
    width: 40px;
  }
  &::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    top: 50%;
    transform: translateY(-50%);
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: red;
  }
`;

export const VolumeContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;

  &:hover ${VolumeSlider} {
    width: 52px;
  }
`;

export const VolumeHighIcon = styled.svg`
  display: none;
`;

export const VolumeLowIcon = styled.svg`
  display: none;
`;

export const VolumeMutedIcon = styled.svg`
  display: none;
`;
