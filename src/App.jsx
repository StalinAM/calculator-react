import { useState } from "react";
import styled from "styled-components";
import BtnCalc from "./components/BtnCalc";
import ContainerCalc from "./components/ContainerCalc";
import GlobalStyles from "./styles/GlobalStyles";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #0d192b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Container className="App">
        <ContainerCalc />
      </Container>
    </>
  );
}

export default App;
