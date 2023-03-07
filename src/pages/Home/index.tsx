import { getList } from "apis/list.api";
import ContentGroup from "components/ContentGroup";
import RadioGroup from "components/RadioGroup";
import { useQuery } from "react-query";
import Banner from "../../components/Banner";
import * as S from "./style";

function Home() {
  const { isLoading, data: listData } = useQuery("list", getList, {
    onSuccess(data) {
      console.log(data);
    },
    onError(error) {
      console.log(error);
    },
    refetchOnWindowFocus: false,
  });

  return (
    <S.Container>
      <Banner />
      {isLoading ? null : (
        <>
          <RadioGroup seasonList={listData["seasons"]} />
          <ContentGroup />
        </>
      )}
    </S.Container>
  );
}

export default Home;
