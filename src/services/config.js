import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080/api"

export const http = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json',

    }
})