import { ReactNode } from "react";
import * as S from "./style";

interface PropsType {
  src: string;
  children: ReactNode;
}

function Content({ src, children }: PropsType) {
  return (
    <div>
      <S.Img />
      <S.Title>{children}</S.Title>
    </div>
  );
}

export default Content;
