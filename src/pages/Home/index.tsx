import { getList } from "apis/list.api";
import EpisodesGroup from "components/EpisodesGroup";
import RadioGroup from "components/RadioGroup";
import { useState } from "react";
import { useQuery } from "react-query";
import Banner from "../../components/Banner";
import * as S from "./style";

function Home() {
  const [seasonIdx, setSeasonIdx] = useState(0);
  const { isLoading, data: listData } = useQuery("list", getList, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
    refetchOnWindowFocus: false,
  });
  const episodes = isLoading ? [] : listData[listData["seasons"][seasonIdx].toLowerCase()];

  return (
    <S.Container>
      <Banner />
      {isLoading ? null : (
        <>
          <RadioGroup seasonList={listData["seasons"]} setSeasonIdx={setSeasonIdx} />
          <EpisodesGroup episodes={episodes} />
        </>
      )}
    </S.Container>
  );
}

export default Home;
