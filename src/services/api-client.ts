import axios from "axios";

const BASE_URL = "https://aware-teal-lemming.cyclic.app/api";

export const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        "x-auth-token": localStorage.getItem("token")
    }
});
