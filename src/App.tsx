import { useState } from "react";
import styled from "styled-components";
import { Botao, Container } from './AppStyles';
//import * as C from './AppStyles';


const App = () => {
  return (
    <div>
      <Container bgColor="grey">
        <span>Texto do componente</span>
        <a href="#">Clique aqui</a>
        <Botao bg="#FF0000">Botão Grande</Botao>
        <Botao color="white" bg="#000" small>Botão Menor</Botao>
      </Container>
    </div>
  )
}

export default App;