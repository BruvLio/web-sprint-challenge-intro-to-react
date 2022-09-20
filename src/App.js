import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Character from './components/Character'
import styled from 'styled-components'



const ContainerDiv = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;  
`

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  const [characters, setCharacters] = useState([])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


  useEffect(() => {
    // axios.get("https://swapi.dev/api/people/")
    // .then((res)=>{
    //   setCharacters(res.data)
    // }).catch(err => console.log(err))
    const getApiTest = async () => {

      try {
        const res = await axios.get("https://swapi.dev/api/people/")
        setCharacters(res.data)
      } catch (err) {
        console.log(err)
      }

    }
    getApiTest()
  }, [])








  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <ContainerDiv>
        {
          characters.map(({ name, height }, index) => {
            return (
              <Character
                key={index}
                name={name}
                height={height}
              />
            )
          })
        }
      </ContainerDiv>
    </div>
  );
}

export default App;

// const lionelFunction = () =>{
//   return `lionel is awesome`
// }