import styled from "styled-components";
import { BiCloudUpload } from "react-icons/bi";
import { IoMdTrash } from "react-icons/io"

export const StyledDeleteOption = styled(IoMdTrash)`
color: #1475cf;
width: 20px;
height: 20px;
:hover{
    color: red;
}
`

export const StyledUpload = styled(BiCloudUpload)`
color: #1475cf;
width: 50px;
height: 50px;
`

export const StyledFileDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
` 

export const StyledPopUp = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 300px;
border-radius: 10px;
background-color: white;
box-shadow: 3px 3px 10px black;

display: flex;
justify-content: center;
align-items: center;
position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
` 

export const StyledForm = styled.form`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
` 


export const StyledFormDiv = styled.div`
display: flex;
width: 80%;
height: 60%;
/* background-color: wheat; */
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px dashed #1475cf;
border-radius: 7px;
cursor: pointer;
` 

export const StyledInput = styled.input`
display: none;
cursor: pointer;
` 

export const StyledLabel = styled.label`
cursor: pointer;
color: #1475cf;
font-family: 'Roboto', sans-serif;
` 

export const StyledButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
width: 50%;
height: 17%;
background-color: #1475cf;
color: white;
font-family: 'Roboto', sans-serif;
font-weight: 600;
border: none;
padding: 15px;
border-radius: 7px;
cursor: pointer;

`

export const StyledErrorMessage = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 600;
color: red;
margin-top: 7px;
margin-bottom: -5px;
`
