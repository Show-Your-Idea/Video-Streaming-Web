import styled from "styled-components";

export const ControlsContainer = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 1;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  display: flex;
  /* column-gap: 15px; */

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.75), transparent);
    width: calc(100% + 1px);
    aspect-ratio: 6 / 1;
    z-index: -1;
    pointer-events: none;
  }
`;

export const Icon = styled.img<{ isDisplay?: boolean }>`
  width: 24px;
  height: 24px;
  display: ${({ isDisplay = true }) => (isDisplay ? "" : "none")};
`;

export const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
`;

export const VolumeSlider = styled.input`
  height: 24px;
  position: absolute;
  left: 50%;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: top left;
  transition: width 100ms ease-in-out;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  width: 0px;
  cursor: pointer;
  background-color: transparent;

  ::-webkit-slider-runnable-track {
    height: 3px;
    background: linear-gradient(
      to right,
      white 0%,
      white ${({ value }) => value}%,
      rgba(255, 255, 255, 0.2) ${({ value }) => value}%,
      rgba(255, 255, 255, 0.2) 100%
    );
  }

  ::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    -webkit-appearance: none;
    background-color: white;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const VolumeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover ${VolumeSlider} {
    top: 0;
    width: 64px;
  }
`;
