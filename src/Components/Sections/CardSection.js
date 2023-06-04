import { Card } from "../Card/Card"
import { StyledButton, StyledCardSection, StyledDescription, StyledForm, StyledMain, StyledMessage, StyledSearch } from "./StyledCardSection"
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
    const [errorMessage, setErrorMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(false);

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
        setErrorMessage("")
    };

    const handleSubmit = async (event) => {

        try {
            
            if (!file) {
                event.preventDefault();
                setErrorMessage("Error: No file selected")
            }
            else {
                setIsLoading(true)

                setErrorMessage("")


                event.preventDefault();

                const formData = new FormData();
                formData.append("csvFile", file);


                await postCSV(formData)

                await getInfo(setInfo, setFilteredInfo)

                setForm(false)

                setIsLoading(false)

            }
        }
        catch (error) {
            setErrorMessage(error.message)
            setIsLoading(false)
        }



    };

    const handleForm = () => {
        setForm(!form)
    }

    return (
        <StyledMain>
            {!form && <StyledSearch placeholder="Find a term in the cards" value={searchTerm} onChange={handleSearchTermChange} />}
            {form &&

                <StyledDescription>
                    Hello! Here you can upload a .csv file(similar to an excel table) and render the files's information in cards that will be displayed at the screen!
                </StyledDescription>

            }
            {form && <Form isLoading={isLoading} handleSubmit={handleSubmit} handleFileChange={handleFileChange} file={file} setFile={setFile} error={errorMessage} />}
            <StyledCardSection>
                {filteredInfo.map((person) => {
                    return (
                        <Card person={person} />
                    )
                })}
                {!form && filteredInfo.length === 0 && <StyledMessage>There is no mention of this term among the cards :/</StyledMessage>}
            </StyledCardSection>
        </StyledMain>
    )
}