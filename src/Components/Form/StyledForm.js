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
height: auto;
border-radius: 10px;
background-color: white;
box-shadow: 3px 3px 10px black;

display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
` 

export const StyledForm = styled.form`
display: flex;
width: 280px;
height: 280px;
flex-direction: column;
justify-content: center;
align-items: center;
cursor: pointer;
margin-top: 10px;
` 


export const StyledFormDiv = styled.div`
display: flex;
width: 80%;
height: 60%;
flex-direction: column;
justify-content: center;
align-items: center;
border: 2px dashed #1475cf;
border-radius: 7px;
cursor: pointer;

transition: all 0.5s;

:hover{
  background-color: #b3d8ff;
}
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

transition: all 1s;

opacity: ${props=>props.isLoading ? 0.5 : 1};

`

export const StyledErrorMessage = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 600;
color: red;
margin-top: 7px;
margin-bottom: -5px;
text-align: center;
`

export const StyledExample = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 30%;
background-color: black;
margin-bottom: 20px;
`
export const StyledExampleText = styled.p`
color: white;
text-align: center;
font-family: 'Roboto', sans-serif;
font-weight: 600;
font-size: 13px;
margin-top: 0px;
margin-bottom: 0px;
`

export const StyledExampleTitle = styled.p`
text-align: center;
font-family: 'Roboto', sans-serif;
font-weight: 600;
margin-top: 10px;
`