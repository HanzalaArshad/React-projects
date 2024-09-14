
import styled from"styled-components";

function StartGame({toggle}) {
  
  const Container= styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;

    .content{
       h1{
        font-size: 96px;
        white-space: nowrap;
        color: white;
       }

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
  return (
    <>
    <Container>
    <div><img src="/images/dices 1.png" alt="" /></div>
    <div className="content">
      <h1>DICE GAME</h1>
      <Button onClick={toggle}>PLAY NOW</Button>

    </div>
    </Container>
</>
  )
}

export default StartGame