import { useRoutes } from "react-router-dom";
import { Cart, Home, Login, Notfound, Orders, ProductInfo, Signup, Wishlist } from "../imports/app";
import PrivateRoute from "./ProtectedRoute";

export const Routes = () => {
    const routes = useRoutes([
        { path: "/", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/shoes", element: <PrivateRoute component={Home} /> },
        { path: "/shoes/:slug", element: <PrivateRoute component={ProductInfo} /> },
        { path: "/orders", element: <PrivateRoute component={Orders} /> },
        { path: "/wishlist", element: <PrivateRoute component={Wishlist} /> },
        { path: "/cart", element: <PrivateRoute component={Cart} /> },
        { path: "*", element: <Notfound /> }
    ]);
    return routes;
};
