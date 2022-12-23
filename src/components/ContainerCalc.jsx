import React, { useState } from "react";
import styled from "styled-components";
import ContainerBtns from "./ContainerBtns";
import Display from "./Display";
const Container = styled.div`
  min-width: 300px;
  background-color: #1e3dac;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -3px #00000040;
`;
function ContainerCalc() {
  const [valueScreen, setValueScreen] = useState("0");
  const [valueCalc, setValueCalc] = useState("0");
  const [result, setResult] = useState(0);
  const [equalB, setEqualB] = useState(false);
  console.log("valorcalc: " + valueCalc);
  const handleClick = (val, name) => {
    if (valueScreen.length > 13) {
      setValueScreen("Digit limit");
      setValueCalc("0");
      setTimeout(() => {
        setValueScreen("0");
      }, 1000);
    } else if (valueScreen == "0") {
      setValueCalc(valueCalc.slice(1).concat(val.toString()));
      setValueScreen(valueScreen.slice(1).concat(name));
    } else if (
      (valueScreen.split("")[valueScreen.length - 1] == "." ||
        valueScreen.match(/[0-9]+\.[0-9]+$/g)) &&
      val == "."
    ) {
      setValueCalc(valueCalc.replace(/\.+/g, "."));
      setValueScreen(valueScreen.replace(/\.+/g, "."));
    } else if (equalB && Number.isInteger(val)) {
      console.log(val);
      setValueCalc(name);
      setValueScreen(name);
      setEqualB(false);
    } else if (!equalB) {
      setValueCalc(valueCalc.concat(val.toString()));
      setValueScreen(valueScreen.concat(name));
    } else {
      setValueCalc(valueCalc.concat(val.toString()));
      setValueScreen(valueScreen.concat(name));
    }
  };
  const equal = (val, name) => {
    setEqualB(true);
    setResult(name);
    let resultEvall = eval(valueCalc);
    const index = resultEvall.toString().indexOf(".");

    if (resultEvall.toString().substring(index).length > 5) {
      setValueScreen(`${eval(valueCalc).toFixed(4)}`);
    } else {
      setValueScreen(resultEvall.toString());
    }
  };
  const clearScreen = (val) => {
    setValueScreen(val);
    setValueCalc(val);
    setResult(0);
    setEqualB(false);
  };
  return (
    <Container>
      <Display valueScreen={valueScreen} result={result} />
      <ContainerBtns
        handleClick={handleClick}
        clearScreen={clearScreen}
        equal={equal}
        valueScreen={valueScreen}
        valueCalc={valueCalc}
      />
    </Container>
  );
}

export default ContainerCalc;
