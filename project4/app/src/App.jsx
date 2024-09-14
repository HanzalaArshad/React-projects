import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchResult from "./Components/SearchResult/SearchResult";


export const BASE_URL="http://localhost:9000";

function App() {

  const[data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [filteredData,setFilteredData]=useState(null);
  const [selectedBtn,setSlectedBtn]=useState("all")



  

useEffect(()=>{
  const FetchFoodData =async()=>{
   
    setLoading(true);
    try {
  
    const respone =await fetch(BASE_URL);
    const json= await respone.json();

    setData(json);
    setFilteredData(json);
    setLoading(false);

    } catch (error) {
      setError("UNABLE TO FETCH DATA");

    }    

};

FetchFoodData();


},[])

console.log(data);

const SearchFood=(e)=>{


  const searchValue=e.target.value;
  if(searchValue === ""){
    setFilteredData(null);
  } 

  const filter=data?.filter((food)=> food.name.toLowerCase().includes(searchValue.toLowerCase())

);

  setFilteredData(filter);
}


const filterFood=(type)=>{
 
  if(type === "all"){
    setFilteredData(data);
    setSlectedBtn("all")
    return;
  }

  const filter=data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase())

);


setFilteredData(filter);
setSlectedBtn(type);
}

const FilterBtn=[
  {
    name:"All",
    type:"all"
  },
  {
    name:"BreakFast",
    type:"breakfast"
  },{
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  }
]

if(error) return <div>{error}</div>
if(loading) return <div>Loading ......</div>




  return (

    <>
  
     <Container>
      <TopContainer>
       <div className="logo">
        <img src="/images/logo5.png" alt="logo" />
       </div>

       <div className="search"> 
        <input onChange={SearchFood} type="search" placeholder="SEARCH FOOD HERE" />
       </div>
      </TopContainer>

      <FilterContainer>

        {
          FilterBtn.map((value)=>(

            
      <Button 
      
      isSelected={selectedBtn=== value.type}
      key={value.name} onClick={()=> filterFood(value.type)}>{value.name}</Button>
          )
          
          )
        }
      
    
      </FilterContainer>

    </Container>
    <SearchResult data={filteredData}/>

    </>
  )
}

export default App;


export const Container =styled.div`
 max-width: 1200px;
 margin: 0 auto;

`;
const TopContainer=styled.section`
display:flex;
height: 140px;
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
  color:white;
  &::placeholder{
    color: whitesmoke;
  }

  }
}

@media (0 < width < 600px ){
  flex-direction: column;
  height: 120px;

}


`;

const FilterContainer=styled.section`
 display:flex;
 justify-content: center;
 gap: 12px;
 padding-bottom: 40px;

`;
export const Button =styled.button`
  background: ${({ isSelected }) => (isSelected ? "#c28108" : "#e7c27e")};
  outline: 1px solid ${({ isSelected }) => (isSelected ? "white" : "#fba506")};


 background-color: #;
 border-radius: 5px;
 padding: 6px 12px;
 border:none;
 color: black;
 cursor: pointer;
 font-size: 20px;
 margin-top: 50px;


 &:hover{
  background-color: #9d6807;
 }

`;




  


