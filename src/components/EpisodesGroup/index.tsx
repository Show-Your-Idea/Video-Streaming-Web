import React from "react";
import * as S from "./style";
import EmptyThumb from "../../assets/emptyThumb.svg";
import { useNavigate } from "react-router-dom";
import Content from "components/common/Content";

interface PropTypes {
  listData: { id: string, title: string, src?: string }[];
}

function EpisodesGroup({ listData }: PropTypes) {
  const navigate = useNavigate();

  return (
    <S.Grid>
      {listData.map(({ id, title, src }) => (
        <Content key={id} id={id} src={src}>{title}</Content>
      ))}
    </S.Grid>
  );
}

export default EpisodesGroup;
