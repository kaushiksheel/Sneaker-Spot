import axios from "axios";

const BASE_URL = "https://aware-teal-lemming.cyclic.app/api";
const token = localStorage.getItem("token");
export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-auth-token": token
    }
});
