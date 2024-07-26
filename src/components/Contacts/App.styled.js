import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 600px;
  margin: 10px auto;
  padding: 20px;
  background-color: #fff5ee;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  text-align: center;
  color: #333;
  margin-block: 30px;
`;

export const SubTitle = styled.h2`
  color: #555;
  margin-block: 20px;
  text-align: center;
  font-weight: 600;
`;

export const WelcomeParagraph = styled.h2`
  color: #555;
  margin-block: 80px;
  text-align: center;
  font-weight: 600;
`;


export const LoadingMessage = styled.p`
  text-align: center;
  color: #777;
`;

export const ErrorMessage = styled.p`
  text-align: center;
  color: red;
`;
export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 230px;
  margin-bottom: 30px;
`;
const buttonAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

export const MagicButton = styled(Link)`
  display: inline-block;
  padding: 40px 80px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(45deg, #ff6b6b, #f7b42c, #4facfe);
  background-size: 300%;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition:
    background 0.5s ease,
    transform 0.3s ease;
  animation: ${buttonAnimation} 3s infinite;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-position: right;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.9);
  }
`;
