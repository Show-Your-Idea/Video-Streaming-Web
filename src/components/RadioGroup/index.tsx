import Radio from "components/common/Radio";
import * as S from "./style";

interface PropTypes {
  seasonList: string[];
}

function RadioGroup({ seasonList }: PropTypes) {
  return (
    <S.Wrap>
      {seasonList.map((season, idx) => (
        // idx가 0인 시즌을 기본으로 체크
        <Radio
          name="season"
          checked={idx === 0}
          onChange={() => {
            console.log(idx);
          }}
          key={season}
        >
          {season}
        </Radio>
      ))}
    </S.Wrap>
  );
}

export default RadioGroup;
