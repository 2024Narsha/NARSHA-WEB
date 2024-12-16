import styled from "styled-components";
import React, { FC, ButtonHTMLAttributes, HTMLAttributes, ReactNode, OptionHTMLAttributes, FormHTMLAttributes } from "react";


export const Button = styled.button<ButtonProps>`
  
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

export const Div = styled.div<DivPorps>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
  height: 120vh;
`;

export const Select = styled.select<SectionProps>`
  border: 1px solid #888888;
  outline: none;
  margin: 0px 20px;
`;

export const Option = styled.option`
  
`;

export const Label = styled.label`
  margin-left: 20px;
`;

export const Input = styled.input<InputPorps>`
  ${(props) => 
  props.var === "title" &&`
    font-size: 10px;
    color: #888888;
    width: 320px; /* 원하는 너비로 설정 */
    padding: 10px 0;
    border: none;
    border-bottom: 1px solid #888888; /* 아래쪽만 선을 그음 */
    outline: none; /* 선택 시 파란 테두리 제거 */
    background-color: transparent;
    margin-left: 20px;
  `
  }

  ${(props) => 
    props.var === "date" &&`
      border: 1px solid #888888;
      outline: none;
      margin: 0px 20px;
      &::-webkit-calendar-picker-indicator {
        background: url('/ico_calendar.svg') no-repeat;
      }
      &::-webkit-clear-button,
      &::-webkit-inner-spin-button {
        display: none; /* 불필요한 버튼 숨기기 */
      }
    `
    }
  
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  var: "image-add" | "submit"
}

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  var: "submit" | "center" | "container" | "form-group";
}

interface SectionProps extends HTMLAttributes<HTMLSelectElement>{
  children: ReactNode;
}

interface DivPorps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
}

interface InputPorps extends HTMLAttributes<HTMLInputElement>{
  var: "title" | "date"
}



