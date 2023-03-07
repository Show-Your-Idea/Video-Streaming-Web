import styled from "styled-components";

export const Container = styled.div`
  width: 982px;
  margin: 0 auto;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.color.black};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
