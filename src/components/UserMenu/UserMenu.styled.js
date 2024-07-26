import styled from "styled-components";

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    gap: 15px;
  }
`;

export const Greeting = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const LogoutButton = styled.button`
  padding: 7px 13px;
  background-color: white;
  color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 8px 15px;
  }

  &:hover {
    background-color: #0056b3;
    color: white;
  }
`;
