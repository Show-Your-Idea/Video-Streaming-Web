import * as S from "./style";

interface RadioProps {
  children: string;
  checked?: boolean;
  onChage?: () => {};
}

export function Radio({ checked = false, children, onChage }: RadioProps) {
  console.log(children);
  return (
    <S.RadioLabel>
      <S.Radio type="radio" onChange={onChage} checked />
      <S.RadioContent>{children}</S.RadioContent>
    </S.RadioLabel>
  );
}
export type { RadioProps };
