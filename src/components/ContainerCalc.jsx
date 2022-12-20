import React, { useState } from "react";
import styled from "styled-components";
import ContainerBtns from "./ContainerBtns";
import Display from "./Display";
const Container = styled.div`
  min-width: 300px;
  background-color: #14253d;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -3px #00000040;
`;
function ContainerCalc() {
  const [valueScreen, setValueScreen] = useState("0");
  const [valueCalc, setValueCalc] = useState("0");
  const [result, setResult] = useState(0);
  const handleClick = (val, name) => {
    // console.log("name: " + name);
    // console.log("val: " + val);
    // console.log("valueScreen: " + valueScreen);
    setValueScreen(valueScreen.concat(name));
    setResult(name);
    if (valueScreen.length > 13) {
      setValueScreen("Digit limit");
      setValueCalc("0");
      setTimeout(() => {
        setValueScreen("0");
      }, 1000);
    } else if (valueScreen == "0") {
      setValueCalc(valueCalc.slice(1).concat(val.toString()));
      setValueScreen(valueScreen.slice(1).concat(name));
    } else if (valueScreen.match(/\.{2,}/)) {
      setValueCalc(valueCalc.replace(/\.+/g, "."));
      setValueScreen(valueScreen.replace(/\.+/g, "."));
    } else {
      setValueCalc(valueCalc.concat(val.toString()));
      setValueScreen(valueScreen.concat(name));
    }
  };

  const equal = (val, name) => {
    console.log(valueScreen);
    console.log(valueCalc);
    console.log(result);
    setResult(name);
    if (Number.isInteger(eval(valueCalc))) {
      setValueScreen(`${eval(valueCalc)}`);
    } else {
      setValueScreen(`${eval(valueCalc).toFixed(4)}`);
    }
  };
  const clearScreen = (val) => {
    setValueScreen(val);
    setValueCalc(val);
    setResult(0);
  };
  const clearResult = (val) => {
    setResult(0);
  };
  return (
    <Container>
      <Display valueScreen={valueScreen} result={result} />
      <ContainerBtns
        handleClick={handleClick}
        clearScreen={clearScreen}
        clearResult={clearResult}
        equal={equal}
        valueScreen={valueScreen}
        valueCalc={valueCalc}
      />
    </Container>
  );
}

export default ContainerCalc;
