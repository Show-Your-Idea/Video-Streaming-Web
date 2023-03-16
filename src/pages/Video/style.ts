import styled from "styled-components";
import * as T from "components/VideoControls/style";

export const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  height: 100vh;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  background-color: black;

  :hover,
  &.scrubbing {
    ${T.ControlsContainer} {
      opacity: 1;
    }
  }

  &.scrubbing,
  ${T.TimelineContainer}:hover {
    ${T.Timeline} {
      height: 7px;
      ::before {
        display: block;
      }
    }
    ${T.TimelineIndicator} {
      --scale: 1;
    }
  }
`;

export const Video = styled.video`
  width: 100%;
`;
