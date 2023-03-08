import styled from "styled-components";

export const Grid = styled.div`
  margin: 20px auto 100px;
  width: 952px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 24px;
  row-gap: 24px;
  color: ${({ theme }) => theme.color.white};
`;

export const Episode = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  cursor: pointer;
`;

export const ThumbWrap = styled.div`
  width: 220px;
  height: 124px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.gray};
`;

export const Thumb = styled.img`
  width: 220px;
  height: 124px;
  border-radius: 8px;
  border: 0;
`;
