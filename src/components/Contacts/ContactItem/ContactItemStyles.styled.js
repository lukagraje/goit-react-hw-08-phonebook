import styled from "styled-components";

export const ItemContainer = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

export const ContactName = styled.span`
  font-weight: bold;
  color: #333;
  margin-right: 0.25rem;
  width: 100px;

  @media (min-width: 768px) {
  width: 200px;});
`;

export const ContactNumber = styled.span`
  color: #555;
`;

  export const DeleteButton = styled.button`
    padding: 4px 6px;
    background-color: red;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    @media (min-width: 768px) {
      padding: 5px 10px;
    }

    &:hover {
      background-color: darkred;
    }
  `;

export const LiWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 15px;
  @media (min-width: 768px) {
    gap: 20px;
  }
`;
