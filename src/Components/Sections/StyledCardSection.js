import styled from "styled-components";

export const StyledMain = styled.main`
min-height: 85dvh;
height: auto;
display: flex;
flex-direction: column;
background-color:  #333333;
justify-content: start;
align-items: center;
padding: 0px 20px;

` 

export const StyledCardSection = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 40px;
margin-bottom: 30px;
` 

export const StyledButton = styled.button`
font-family: 'Roboto', sans-serif;
border: none;
padding: 15px;
border-radius: 10px;
box-shadow: 3px 3px 10px black;
cursor: pointer;
` 

export const StyledSearch = styled.input`
text-align: center;
font-family: 'Roboto', sans-serif;
border: none;
padding: 5px;
margin: 30px 0px;
border-radius: 5px;
box-shadow: 3px 3px 10px black;
` 

export const StyledMessage = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 300;
color: red;
` 

export const StyledDescription = styled.h2`
text-align: center;
font-family: 'Roboto', sans-serif;
font-size: 20px;
width: 75%;
color: white;
`