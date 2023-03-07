import React from "react";
import * as S from "./style";

interface PropTypes {
  episodes: string[];
}

function EpisodesGroup({ episodes }: PropTypes) {
  const imgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    (e.target as HTMLImageElement).src = "assets/emptyThumb.png";
  };
  return (
    <S.Grid>
      {episodes.map((episode: string, idx) => (
        <S.Episode key={idx}>
          <S.ThumbWrap>
            <S.Thumb src="" onError={imgError} alt="" />
          </S.ThumbWrap>
          {episode}
        </S.Episode>
      ))}
    </S.Grid>
  );
}

export default EpisodesGroup;
