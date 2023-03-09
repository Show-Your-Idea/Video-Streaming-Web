import { ReactNode } from "react";
import * as S from "./style";

interface PropsType {
  src: string;
  children: ReactNode;
}

function Content({ src, children }: PropsType) {
  return (
    <S.Wrap>
      <S.Img />
      <S.Title>{children}</S.Title>
    </S.Wrap>
  );
}

export default Content;
