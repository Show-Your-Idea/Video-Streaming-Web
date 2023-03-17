import { getList } from "apis/list.api";
import EpisodesGroup from "components/EpisodesGroup";
import UploadButton from "components/UploadButton";
import { LIST } from "constants/key.constant";
import { useQuery } from "react-query";
import Banner from "../../components/Banner";
import * as S from "./style";

function Home() {
  const { data: listData } = useQuery(LIST, getList, {
    refetchOnWindowFocus: false,
  });

  return (
    <S.Container>
      <Banner />
      <UploadButton />
      {listData ? <EpisodesGroup listData={listData} /> : null}
    </S.Container>
  );
}

export default Home;
