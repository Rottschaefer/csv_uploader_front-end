import { useRef } from "react";
import { StyledButton, StyledDeleteOption, StyledErrorMessage, StyledExample, StyledExampleText, StyledExampleTitle, StyledFileDiv, StyledForm, StyledFormDiv, StyledInput, StyledLabel, StyledPopUp, StyledUpload } from "./StyledForm"
import { useState } from "react";


export const Form = ({ handleSubmit, handleFileChange, file, setFile, error, isLoading }) => {

    const inputFileRef = useRef(null);
    const [fileName, setFileName] = useState("Upload here your .CSV file");


    const handleFormClick = () => {
        if (!file) {
            inputFileRef.current.click();
        }
    };

    const handleDeleteFile = () => {
        setFile(null)
    }

    return (
        <StyledPopUp>
            <StyledForm data-testid="form-component" onSubmit={handleSubmit}>
                <StyledFormDiv onClick={handleFormClick}>
                    <StyledUpload />
                    <StyledFileDiv>
                        {file && <StyledDeleteOption onClick={handleDeleteFile} />}
                        <StyledLabel htmlFor="csvFile">{file ? file.name : fileName}</StyledLabel>
                    </StyledFileDiv>
                    <StyledInput type="file" name="csvFile" id="csvFile" accept=".csv" ref={inputFileRef} onChange={handleFileChange} required />
                </StyledFormDiv>
                {error && <StyledErrorMessage>{error}</StyledErrorMessage>}
                <StyledButton isLoading={isLoading} type="submit" onClick={handleSubmit}>{isLoading? "Sending..." : "Upload"}</StyledButton>
                {/* <StyledButton type="submit" onClick={handleSubmit}>Upload</StyledButton> */}
            </StyledForm>
            <StyledExampleTitle>
                    Your file should be like this:
                </StyledExampleTitle>
            <StyledExample>
                <StyledExampleText>
                    name,city,country,favorite_sport
                    <br/>
                    John Doe,New York,USA,Basketball
                    <br/>
                    Jane Smith,London,UK,Football
                </StyledExampleText>
            </StyledExample>
        </StyledPopUp>
    )
}