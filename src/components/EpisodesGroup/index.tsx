import React from "react";
import * as S from "./style";
import EmptyThumb from "../../assets/emptyThumb.svg";
import { useNavigate } from "react-router-dom";

interface PropTypes {
  season: string;
  episodes: string[];
}

function EpisodesGroup({ season, episodes }: PropTypes) {
  const navigate = useNavigate();

  return (
    <S.Grid>
      {episodes.map((episode: string, idx) => (
        <S.Episode
          key={idx}
          onClick={() => {
            navigate(`/video?season=${season}&episode=${episode}`);
          }}
        >
          <S.ThumbWrap>
            <S.Thumb src={null ?? EmptyThumb} alt="" />
          </S.ThumbWrap>
          {episode}
        </S.Episode>
      ))}
    </S.Grid>
  );
}

export default EpisodesGroup;
