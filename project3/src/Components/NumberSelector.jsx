import { useState } from "react";
import styled from "styled-components";

function NumberSelector({setError,error,selectedNumber,setSelectedNumber}) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];


  const numberselectorhandler=(value)=>{

    setSelectedNumber(value);
    setError("")
  }



  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            $isSelected={value === selectedNumber} // Use $isSelected here
            key={i}
            onClick={() => numberselectorhandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>SELECT NUMBER</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p {
    font-size: 24px;
    font-weight: 700;
  }

  .error{
    color: red;
    margin-bottom: 5px;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid white;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;

  background-color: ${(props) => (props.$isSelected ? "white" : "black")};
  color: ${(props) => (props.$isSelected ? "black" : "white")};
`;
