import styled from "styled-components";

export const Label = styled.label`
  width: 68px;
  height: 32px;
  background-color: ${({ theme }) => theme.color.black};
  border: solid 2px ${({ theme }) => theme.color.white};
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.white};
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Radio = styled.input`
  display: none;

  &:checked + ${Content} {
    color: ${({ theme }) => theme.color.black};
    background-color: white;
  }
`;
