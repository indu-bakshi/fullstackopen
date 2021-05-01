import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = infoObject => {
    return axios.post(baseUrl, infoObject)
}

const deletePerson = (id) =>{
    return axios.delete(`${baseUrl}/${id}`)
}
const update = (id,personObject)=>{
    return axios.post(`${baseUrl}/${id}`,personObject)
}
const details ={
    getAll,
    create,
    deletePerson,
    update
}
export default details