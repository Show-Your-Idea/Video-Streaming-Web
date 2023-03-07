import * as S from "./style";

interface PropTypes {
  episodes: string[];
}

function ContentGroup({ episodes }: PropTypes) {
  return <S.Grid>{episodes.join(" ")}</S.Grid>;
}

export default ContentGroup;
