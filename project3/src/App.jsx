import StartGame from "./Components/StartGame";
import "./App.css";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

function App() {

  const [gameStarted,setGameStarted]=useState(false);


  const toggleGamePlay=()=>{
    setGameStarted((prev)=> !prev)
  }
  return (
    <>

    {gameStarted ? <GamePlay/>:<StartGame toggle={toggleGamePlay}/>}
    </>
  )
}

export default App;
