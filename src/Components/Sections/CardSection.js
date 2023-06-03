import { Card } from "../Card/Card"
import { StyledButton, StyledCardSection, StyledForm, StyledMain, StyledMessage, StyledSearch } from "./StyledCardSection"
import { useState } from "react";
import { Requests } from "../../Requests/Requests";
import { PATH } from "../../Requests/path";
import { Form } from "../Form/Form";
import { useEffect } from "react";


export const CardSection = () => {

    const { postCSV } = Requests(`${PATH}/api/files`);
    const { getInfo } = Requests(`${PATH}/api/users`);
    const [file, setFile] = useState(null);
    const [info, setInfo] = useState([]);
    const [filteredInfo, setFilteredInfo] = useState([]);
    const [form, setForm] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value)
    }

    useEffect(() => {
        const searchedInfo = info.filter((card) =>
          card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          card.favorite_sport.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredInfo(searchedInfo);
      }, [searchTerm]);



    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
        setError("")
        console.log(file)
    };

    const handleSubmit = async (event) => {

        if(!file){
            setError("Error: No file selected")
        }
        else{

        setError("")

        setForm(false)

        event.preventDefault();

        const formData = new FormData();
        formData.append("csvFile", file);


        await postCSV(formData)

        await getInfo(setInfo, setFilteredInfo)

        console.log(info)
        }
    };

    const handleForm = () => {
        setForm(!form)
    }

    return (
        <StyledMain>
            {!form && <StyledSearch placeholder="Find a term in the cards" value={searchTerm} onChange={handleSearchTermChange}/>}
            {form && <Form handleSubmit={handleSubmit} handleFileChange={handleFileChange} file={file} setFile={setFile} error={error}/>}            
            <StyledCardSection>
                {filteredInfo.map((person) => { return (
                <Card person={person} />
                ) })}
                {!form && filteredInfo.length === 0 && <StyledMessage>There is no mention of this term among the cards :/</StyledMessage>}
            </StyledCardSection>
        </StyledMain>
    )
}