import Radio from "components/common/Radio";
import React from "react";
import * as S from "./style";

interface PropTypes {
  seasonList?: string[];
  setSeasonIdx: React.Dispatch<React.SetStateAction<number>>;
}

function RadioGroup({ seasonList, setSeasonIdx }: PropTypes) {
  console.log("RadioGroup");
  return (
    <S.Wrap>
      {seasonList?.map((season, idx) => (
        // idx가 0인 시즌을 기본으로 체크
        <Radio name="season" checked={idx === 0} onChange={() => setSeasonIdx(idx)} key={season}>
          {season}
        </Radio>
      ))}
    </S.Wrap>
  );
}

export default RadioGroup;
