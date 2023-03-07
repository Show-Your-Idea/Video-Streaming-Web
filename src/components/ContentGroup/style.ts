import styled from "styled-components";

export const Grid = styled.div`
  width: 952px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  color: ${({ theme }) => theme.color.white};
`;
