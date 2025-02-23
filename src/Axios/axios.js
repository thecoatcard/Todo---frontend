import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-backend-55ni.onrender.com/api"
})
export default instance
