import styled from "styled-components";

export const RadioLabel = styled.label`
  display: block;
  width: 68px;
  height: 32px;
`;

export const RadioContent = styled.div``;

export const Radio = styled.input`
  display: none;
  &:checked + ${RadioContent} {
    /* color: ${({ theme }) => theme.color} */
  }
`;
