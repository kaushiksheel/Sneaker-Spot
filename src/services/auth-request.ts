import { apiClient } from "./api-client";

export const login = (email: string, password: string) =>
    apiClient.post("/login", { email, password });
