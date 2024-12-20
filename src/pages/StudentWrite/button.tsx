import styled from "styled-components";
import React, { FC, ButtonHTMLAttributes } from "react";

const StyledButton = styled.button`
  width: 100%;
  max-width: 250px;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  background-color: ${(p)=> p.color || "#1B3DEA"}
`;

const StyledBox = styled.div`
  width: 100%;
  max-width: 360px;
  height: 100px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 1));
  color: white;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  margin-bottom: 65px;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledBox><StyledButton {...props}>{children}</StyledButton></StyledBox>;
};

export default Button;