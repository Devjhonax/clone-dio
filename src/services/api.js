import axios from "axios";

const apiAxio = axios.create({
    baseURL: "http://localhost:3000"
})

export default apiAxio