import styled from "styled-components"
function MainContainer() {
  return (
    <Container>
      <TopContainer>
       <div className="logo">
        <img src="/images/logo5.png" alt="logo" />
       </div>

       <div className="search"> 
        <input type="search" placeholder="SEARCH FOOD HERE" />
       </div>
      </TopContainer>

      <FilterContainer>
      <Button>All</Button>
      <Button>BreakFast</Button>
      <Button>Lunch</Button>
      <Button>Dinner</Button>
      </FilterContainer>

      <FoodContainer>
        <FoodCards></FoodCards>
      </FoodContainer>
    </Container>
  )
}

export default MainContainer;


const Container =styled.div`
 max-width: 1200px;
 margin: 0 auto;

`;
const TopContainer=styled.section`
display:flex;
min-height: 140px;
justify-content: space-between;
padding: 16px;
align-items: center;

.search {
  input{

   background-color: transparent;
   border: 2px solid orange;
  height: 40px;
  border-radius: 5px;
  font-size: 16px;
  padding: 0 10px;

  }
}


`;

const FilterContainer=styled.section`
 display:flex;
 justify-content: center;
 gap: 12px;

`;
const Button =styled.button`
 background-color: #fba506;
 border-radius: 5px;
 padding: 6px 12px;
 border:none;
 color: black;

`;

const FoodContainer =styled.section`
height: 100vh;
 background-image: url("/images/background.jpg");
 background-size: cover;

`;
const FoodCards=styled.div``;


