import { ComponentType, FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PrivateRoute: FC<{ component: ComponentType }> = ({ component: Component }) => {
    const navigate = useNavigate();
    const authenticated = localStorage.getItem("token") ? true : false;

    useEffect(() => {
        if (!authenticated) {
            navigate("/");
        }
    }, []);

    return <Component />;
};

export default PrivateRoute;
