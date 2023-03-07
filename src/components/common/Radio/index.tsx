import { ReactNode } from "react";
import * as S from "./style";

interface PropTypes {
  children: ReactNode;
  name: string;
  checked?: boolean;
  onChange?: () => void;
}

function Radio({ children, name, checked = false, onChange }: PropTypes) {
  return (
    <S.Label>
      <S.Radio type="radio" name={name} defaultChecked={checked} onChange={onChange} />
      <S.Content>{children}</S.Content>
    </S.Label>
  );
}

export default Radio;
