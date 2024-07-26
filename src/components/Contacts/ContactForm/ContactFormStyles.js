import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
`;

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 20%;
  font-weight: 600;
  @media (min-width: 768px) {
    padding: 12px;
  }
  &:hover {
    background-color: #0056b3;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;
