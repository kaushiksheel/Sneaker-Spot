import { useRoutes } from "react-router-dom";
import { Cart, Home, Login, Notfound, Orders, ProductInfo, Signup, Wishlist } from "../imports/app";

export const Routes = () => {
    const routes = useRoutes([
        { path: "/", element: <Login /> },
        { path: "/signup", element: <Signup /> },
        { path: "/shoes", element: <Home /> },
        { path: "/shoes/:slug", element: <ProductInfo /> },
        { path: "/orders", element: <Orders /> },
        { path: "/wishlist", element: <Wishlist /> },
        { path: "/cart", element: <Cart /> },
        { path: "*", element: <Notfound /> }
    ]);
    return routes;
};
