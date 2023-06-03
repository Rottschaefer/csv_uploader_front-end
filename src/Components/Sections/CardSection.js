import { Card } from "../Card/Card"
import { StyledCardSection, StyledForm, StyledMain } from "./StyledCardSection"
import { useState } from "react";
import { Requests } from "../../Requests/Requests";
import { PATH } from "../../Requests/path";


export const CardSection = () => {

    const { postCSV } = Requests(`${PATH}/api/files`);
    const { getInfo } = Requests(`${PATH}/api/users`);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("csvFile", file);


        await postCSV(formData)

        await getInfo(setInfo)

        console.log(info)
    };
    return (
        <StyledMain>
            <StyledForm onSubmit={handleSubmit}>
                <input type="file" name="csvFile" accept=".csv" onChange={handleFileChange} required />
                <button type="submit">Enviar</button>
            </StyledForm>
            <StyledCardSection>
                {info.map((person) => { return (<Card person={person} />) })}
            </StyledCardSection>
        </StyledMain>
    )
}