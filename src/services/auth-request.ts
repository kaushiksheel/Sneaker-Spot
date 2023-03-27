import { apiClient } from "./api-client";

export const login = (email: string, password: string) =>
    apiClient.post("/login", { email, password });

export const signup = (fullname: string, email: string, password: string) =>
    apiClient.post("/signup", { fullname, email, password });
