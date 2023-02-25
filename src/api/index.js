import axios from 'axios'
const inastance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        Authorization: process.env.REACT_APP_API_KEY,
    },
})
export default inastance