import React from "react";
import * as S from "./style";
import EmptyThumb from "../../assets/emptyThumb.svg";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { videoInfo } from "atoms/videoInfo.atom";

interface PropTypes {
  season: string;
  episodes: string[];
}

function EpisodesGroup({ season, episodes }: PropTypes) {
  const setVideoInfo = useSetRecoilState(videoInfo);
  const navigate = useNavigate();

  return (
    <S.Grid>
      {episodes.map((episode: string, idx) => (
        <S.Episode
          key={idx}
          onClick={() => {
            setVideoInfo({ season, episode });
            navigate(`/video`);
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
