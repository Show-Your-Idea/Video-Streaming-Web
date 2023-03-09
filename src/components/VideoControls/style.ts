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

export const PlayPauseButton = styled.button`
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
