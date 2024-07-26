import styled from "styled-components";

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: BlanchedAlmond;
  color: black;
  border: 1px solid black;
  border-radius: 1em;

  @media (min-width: 768px) {
    padding: 10px 20px;
  }
`;