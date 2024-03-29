import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import Notfound from "../pages/Notfound";
import { Spinner } from "../components/Spinner";
import { Routes } from "../components/Routes";

const Home = lazy(() => import("../pages/Home"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductInfo = lazy(() => import("../pages/ProductInfo"));
const Orders = lazy(() => import("../pages/Orders"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));

export {
    Notfound,
    QueryClient,
    QueryClientProvider,
    ReactQueryDevtools,
    RecoilRoot,
    Route,
    Spinner,
    Suspense,
    lazy,
    Cart,
    Home,
    Login,
    Orders,
    ProductInfo,
    Wishlist,
    Signup,
    Routes
};
