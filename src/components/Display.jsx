import React from "react";
import styled from "styled-components";
const Screen = styled.div`
  height: 120px;
  margin: 15px 15px 0 15px;
  border-radius: 10px;
  background-color: #132360;
  text-align: end;
  padding: 20px;
`;
const Value = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-weight: bold;
  font-size: 2rem;
  color: white;
  overflow-x: hidden;
  width: 15.63rem;
`;
const Result = styled.div`
  font-weight: bold;
  font-size: 2rem;
  color: white;
`;
function Display({ valueScreen, result }) {
  return (
    <Screen>
      <Value id="display">{valueScreen}</Value>
      <Result>{result}</Result>
    </Screen>
  );
}

export default Display;
