import axios from "axios"

export const Requests = (path) => {

    const postCSV = async (body) =>{
        
    await axios.post(path, body)
    .catch(error => {
        throw new Error(error.response.data)
    })
    
    }

    const getInfo = async (setInfo, setFilteredInfo) =>{
        
        await axios.get(path)
        .then(response => {setInfo(response.data); setFilteredInfo(response.data)})
        .catch(error => console.log(error.message))
        
        }


    return{postCSV, getInfo}
}