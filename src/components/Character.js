// Write your Character component here
import React, { useState } from 'react';
import styled from 'styled-components'

const CharacterDiv = styled.div`

height: 12rem;
display: inline-block;
border-radius: 3px;
border: 1px solid red;
padding: 0.5rem 0;
margin: 0.5rem 1rem;
width: 11rem;
background: transparent;
color: white;
border: 2px solid white;

`



const Character = (props) => {


    const { name } = props

    return(
        <CharacterDiv>
            <h1>
                {name}
            </h1>
        </CharacterDiv>
    );
};

export default Character;