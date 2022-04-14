import styled from "styled-components";

type ContainerProps = {
  bgColor?: string;
}


export const Container = styled.div<ContainerProps>`
  background-color : ${props => props.bgColor};
  color: white;
`;


type BotaoProps = {
  bg: string;
  small?: boolean;
  color?: string;
}
export const Botao = styled.button<BotaoProps>`
  background-color : red;
  font-size: ${(props) => props.small ? '15px' : '30px'};
  background-color: ${(props)=> props.bg};
  color: ${props => props.color};
`;