import axios from "axios"

export const Requests = (path) => {

    const postCSV = async (body) =>{
        
    await axios.post(path, body)
    .then(response => console.log(response))
    .catch(error => console.log(error.message))
    
    }

    const getInfo = async (setInfo) =>{
        
        await axios.get(path)
        .then(response => setInfo(response.data))
        .catch(error => console.log(error.message))
        
        }


    return{postCSV, getInfo}
}