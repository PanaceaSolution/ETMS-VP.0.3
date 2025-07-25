import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:3000/api/v3",
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json"
    }
})

const AuthApi = axios.create({
    baseURL : "http://localhost:3000/api/v3",
    headers : {
        "Content-Type" : "application/json",
        "Accept" : "application/json",
        "Authorization" : localStorage.getItem("token")
    }
})

export {API , AuthApi}