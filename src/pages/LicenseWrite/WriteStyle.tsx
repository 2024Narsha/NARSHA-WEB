import styled from "styled-components";
import React, { FC, ButtonHTMLAttributes, HTMLAttributes, ReactNode, OptionHTMLAttributes, FormHTMLAttributes } from "react";


const StyledButton = styled.button<ButtonProps>`
  
  ${(props)=>
    props.var === "submit" &&`
    width: 250px;
    padding: 10px;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    background-color: #1B3DEA;
    `
  }
  ${(props)=>
  props.var  === "image-add" &&`
    width: 60px;
    height: 60px;
    margin: 20px 20px 0px ;
    background: none;
    border: 0px;
  `
  }


`;

export const Box = styled.div<BoxProps>`
  width: 360px;
  ${(props) =>
    props.var === "submit" &&
    `
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
    `}

  ${(props) =>
    props.var === "center" &&
    `
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto;
    `}

  ${(props) =>
    props.var === "container" &&
    `
      margin: 87px auto;
      padding: 0 0 100px 0;
      overflow-y: auto;
    `}

  ${(props) => 
    props.var === "form-group" &&
    `
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin-bottom: 10px;
    `
  }
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  height: 120vh;
`;

const StyledSelect = styled.select`
  border: 1px solid #888888;
  outline: none;
  margin: 0px 20px;
`;

const StyledOption = styled.option`
  
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  var?: "image-add" | "submit"
}

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  var?: "submit" | "center" | "container" | "form-group";
}

interface OptionProps extends OptionHTMLAttributes<HTMLOptionElement>{
  children: ReactNode;
}

interface SectionProps extends HTMLAttributes<HTMLSelectElement>{
  children: ReactNode;
}

interface DivPorps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
}


export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export const styledBox: FC<BoxProps> = ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};

export const Option: FC<OptionProps> = ({children, ...props}) => {
  return <StyledOption {...props}>{children}</StyledOption>
}

export const Div: FC<DivPorps> = ({children, ...props}) => {
  return <StyledDiv {...props}>{children}</StyledDiv>
}

export const Select: FC<SectionProps> = ({children, ...props}) =>{
  return <StyledSelect {...props}>{children}</StyledSelect>
}




