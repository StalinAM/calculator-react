import styled from "styled-components";
import ContainerCalc from "./components/ContainerCalc";
import GlobalStyles from "./styles/GlobalStyles";
import Back from "./assets/background.svg";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  background-image: url(${Back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
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
