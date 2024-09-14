import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import Rules from "./Rules";

function GamePlay() {

  const [score,setScore]=useState(0);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice,setCurrentDice]=useState(1);

  const [error,setError]= useState();
  const [show,setShow]= useState();

  
const generateRandomNumber=(max,min)=>{

  console.log(Math.floor(Math.random()*(max-min)+min));
  
  return Math.floor(Math.random()*(max-min)+min);



}

  const rollDice=()=>{

    if(!selectedNumber){
      setError("YOU HAVE NOT SELECTED ANY NUMBER")
       return;
    }  

    setError("")
    const randomDice=generateRandomNumber(1,7);

    setCurrentDice((prev)=>randomDice);

    if(selectedNumber === randomDice){
      setScore((prev)=> prev+randomDice)
    } else{
      setScore((prev)=> prev-2)
    }

    setSelectedNumber(undefined)
  }

  const ResetSCore=()=>{
    setScore(0)
  }


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error} setError={setError} />
      </div>

      <RollDice currentDice={currentDice} rollDice={rollDice}/>

      <div className="btns">
        <OutlineButton onClick={ResetSCore}>RESET</OutlineButton>
        <Button onClick={()=> setShow(prev => !prev)}>
          {show ? "HIDE" :"SHOW RULES"}
          </Button>

       {show &&<Rules/>}
      </div>
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
padding-top:70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;


  }

`

const Button=styled.button`
padding: 10px 18px;
background-color: #f6f5f5;
border-radius: 5px;
color: #080808;
min-width: 220px;
border: none;
font-size: 16px;
border:1px solid transparent;
transition:0.3s background ease-in;




&:hover{
 background-color: #0b0b0b;
 color: #f9f3f3;
 border:1px solid black;
 transition:0.3s background ease-in;

}


`

const OutlineButton= styled(Button)`


&:hover{
 background-color: #0b0b0b;
 color: #f8eded;
 border:1px solid transparent;
 transition:0.3s background ease-in;

}

`
;

