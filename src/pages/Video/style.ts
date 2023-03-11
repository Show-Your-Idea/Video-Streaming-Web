import styled from "styled-components";
import * as T from "components/VideoControls/style";

export const VideoContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  margin-inline: auto;
  background-color: black;

  &:hover {
    ${T.ControlsContainer} {
      opacity: 1;
    }
  }

  &.full-screen {
    height: 100vh;
  }
`;

export const Video = styled.video`
  width: 100%;
`;
