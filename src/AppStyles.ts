import styled from "styled-components";

type ContainerProps = {
  bgColor?: string;
}


export const Container = styled.div<ContainerProps>`

  max-width: 600px;
  margin: auto;
  display: flex;
  background-color : ${props => props.bgColor};
  color: white;

  span {
    font-weight: bold;
    color: #000;
  }

  a{ 
    color:white;
    
  }

  a:hover{
    color: blue;
  }

  @media(max-width: 500px) {
    background-color: green;
    flex-direction: column;
    
    span{
      color: #0000FF;
    }


  }

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