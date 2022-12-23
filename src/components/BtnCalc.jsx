import React from "react";
import styled from "styled-components";
const Btn = styled.button`
  border-radius: 20px;
  cursor: pointer;
  color: white;
  background-color: #162b79;
  box-shadow: 5px 5px 10px -3px #00000040;
  border: 1px solid #162b79;
  font-weight: bold;
  font-size: 2rem;
  grid-column: ${(props) => props.location};
  &:hover {
    background-color: #4363d8;
  }
`;
function BtnCalc({ name, value, location, handleClick, id }) {
  return (
    <Btn id={id} location={location} onClick={() => handleClick(value, name)}>
      {name}
    </Btn>
  );
}

export default BtnCalc;
