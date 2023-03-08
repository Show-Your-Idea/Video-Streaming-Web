import { getList } from "apis/list.api";
import EpisodesGroup from "components/EpisodesGroup";
import RadioGroup from "components/RadioGroup";
import { LIST } from "constants/key.constant";
import { useState } from "react";
import { useQuery } from "react-query";
import Banner from "../../components/Banner";
import * as S from "./style";

function Home() {
  const [seasonIdx, setSeasonIdx] = useState(0);

  const { data: listData } = useQuery(LIST, getList, {
    onSuccess(data) {
      console.log(data);
    },
    refetchOnWindowFocus: false,
  });

  const season = listData?.seasons[seasonIdx];

  return (
    <S.Container>
      <Banner />
      {season ? (
        <>
          <RadioGroup seasonList={listData.seasons} setSeasonIdx={setSeasonIdx} />
          <EpisodesGroup season={season} episodes={listData[season.toLowerCase()]} />
        </>
      ) : null}
    </S.Container>
  );
}

export default Home;
