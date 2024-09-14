import { useState } from "react";
import styled from "styled-components";

function RollDice({currentDice,rollDice}) {






  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice1" />
      </div>
      <p>CLICK ON DICE TO ROLL</p>
    </DiceContainer>
  )
}

export default RollDice;


const DiceContainer= styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice{
  cursor: pointer;

}

P{
   font-size: 24px;


}
`