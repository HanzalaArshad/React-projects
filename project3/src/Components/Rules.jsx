import styled from "styled-components"
function Rules() {
  return (
    <RulesContainer>
      <h2>HOW TO PLAY THE DICE GAME</h2>
     <div className="text">
      <p>Select any Number</p>
      <p>Click on the image</p>
      <p>after selecting number and click on dice if the number is equal is to the dice you will get same point </p>
      <p>if you guess wrong it will detect 2 points</p>
     </div>
      </RulesContainer>
  )
}

export default Rules



const RulesContainer= styled.div`

background-color: #1a1919;
padding: 20px;
color: #f3eaea;
max-width: 800px;
margin: 0 auto;
margin-top: 20px;
border-radius: 10px;

  h2{
     font-size:24px;
  }
  .text{
    margin-top: 24px;
  }
`