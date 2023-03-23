import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { IUser } from "../interfaces/IUser";

export const useCurrentUser = () => {
    const [user, setUser] = useState<IUser | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const user = jwtDecode(token);
            setUser(user as IUser);
        } else {
            setUser(null);
        }
    }, []);

    return { user };
};
