import { FC, HtmlHTMLAttributes } from "react";
import styled from "styled-components";

const StyledTopBar = styled.div<BoxProps>`
  width: 360px;
  margin: auto;
  height: ${(props) => props.height || '100%'};
`;


interface BoxProps extends HtmlHTMLAttributes<HTMLHtmlElement>{
  children: React.ReactNode;
  height ?: string ;
}

const Box: FC<BoxProps> = ({children}) => {
  return <StyledTopBar>{children}</StyledTopBar>
};



export default Box;