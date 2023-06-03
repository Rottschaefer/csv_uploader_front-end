import { useRef } from "react";
import { StyledButton, StyledDeleteOption, StyledErrorMessage, StyledFileDiv, StyledForm, StyledFormDiv, StyledInput, StyledLabel, StyledPopUp, StyledUpload } from "./StyledForm"
import { useState } from "react";


export const Form = ({ handleSubmit, handleFileChange, file, setFile, error }) => {

    const inputFileRef = useRef(null);
    const [fileName, setFileName] = useState("Upload here your .CSV file");


    const handleFormClick = () => {
        if(!file){
        inputFileRef.current.click();
        }
    };

    const handleDeleteFile = () => {
        setFile(null)
    }

    return (
        <StyledPopUp>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormDiv onClick={handleFormClick}>
                <StyledUpload/>
                <StyledFileDiv>
                {file && <StyledDeleteOption onClick={handleDeleteFile}/>}
                <StyledLabel for="csvFile">{file ? file.name : fileName}</StyledLabel>
                </StyledFileDiv>
                <StyledInput type="file" name="csvFile" id="csvFile" accept=".csv" ref={inputFileRef} onChange={handleFileChange} required />
                </StyledFormDiv>
                {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
                <StyledButton type="submit" onClick={handleSubmit}>Enviar</StyledButton>
            </StyledForm>
        </StyledPopUp>
    )
}