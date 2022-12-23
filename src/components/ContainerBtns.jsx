import React from "react";
import BtnCalc from "./BtnCalc";
import styled from "styled-components";
const Btns = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 65px);
  grid-template-rows: repeat(5, 65px);
  gap: 10px;
  padding: 15px;
`;
function ContainerBtns({
  handleClick,
  clearScreen,
  equal,
  valueScreen,
  valueCalc,
}) {
  return (
    <Btns>
      <BtnCalc
        id="clear"
        name="C"
        value={"0"}
        location={"1/4"}
        handleClick={clearScreen}
      />
      <BtnCalc id="divide" name="/" value={" / "} handleClick={handleClick} />
      <BtnCalc id="seven" name="7" value={7} handleClick={handleClick} />
      <BtnCalc id="eight" name="8" value={8} handleClick={handleClick} />
      <BtnCalc id="nine" name="9" value={9} handleClick={handleClick} />
      <BtnCalc id="multiply" name="x" value={" * "} handleClick={handleClick} />
      <BtnCalc id="four" name="4" value={4} handleClick={handleClick} />
      <BtnCalc id="five" name="5" value={5} handleClick={handleClick} />
      <BtnCalc id="six" name="6" value={6} handleClick={handleClick} />
      <BtnCalc id="subtract" name="-" value={" - "} handleClick={handleClick} />
      <BtnCalc id="one" name="1" value={1} handleClick={handleClick} />
      <BtnCalc id="two" name="2" value={2} handleClick={handleClick} />
      <BtnCalc id="three" name="3" value={3} handleClick={handleClick} />
      <BtnCalc id="add" name="+" value={" + "} handleClick={handleClick} />
      <BtnCalc id="zero" name="0" value={0} handleClick={handleClick} />
      <BtnCalc id="decimal" name="." value={"."} handleClick={handleClick} />
      <BtnCalc
        id="equals"
        name="="
        location={"3/5"}
        value={valueCalc}
        handleClick={equal}
      />
    </Btns>
  );
}

export default ContainerBtns;
