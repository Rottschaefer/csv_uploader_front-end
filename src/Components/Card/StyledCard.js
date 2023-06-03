import styled from "styled-components";
import { BsFillPinMapFill } from "react-icons/bs";


export const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: end;
gap: 5px;
padding-bottom: 30px;
margin: 15px;
width: 15rem;
height: 20rem;
border-radius: 10px;

background-image:linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.3)), url(${props => props.image});
background-color: black;
background-size: cover;

box-shadow: 5px 5px 12px rgba(0, 0, 0, 0.5);
`



export const StyledText = styled.p`
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 600;
font-size: 25px;

padding-left: 30px;
margin: 0;
`

export const StyledPin = styled(BsFillPinMapFill)` 
color: white;
padding-left: 30px;
width: 12px;

`

export const StyledTextLocation = styled.p`
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 600;
font-size: 12px;

padding-left: 5px;
margin: 0;
`


export const StyledLocation = styled.div`
display: flex;
align-items: center;

`