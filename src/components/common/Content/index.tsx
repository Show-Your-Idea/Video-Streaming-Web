import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import EmptyThumb from "../../../assets/emptyThumb.svg";
import * as S from "./style";

interface PropsType {
  id: string;
  src?: string;
  children: ReactNode;
}

function Content({ id, children, src }: PropsType) {
  const navigate = useNavigate();

  return (
    <S.Episode
          onClick={() => {
            navigate(`/video?id=${id}`);
          }}
        >
          <S.ThumbWrap>
            <S.Thumb src={src ?? EmptyThumb} alt="" />
          </S.ThumbWrap>
          {children}
        </S.Episode>
  );
}

export default Content;
