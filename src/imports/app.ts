import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import Notfound from "../pages/Notfound";
import { Spinner } from "../components/Spinner";

const Home = lazy(() => import("../pages/Home"));
const Wishlist = lazy(() => import("../pages/Wishlist"));
const Cart = lazy(() => import("../pages/Cart"));
const ProductInfo = lazy(() => import("../pages/ProductInfo"));
const Orders = lazy(() => import("../pages/Orders"));
const Login = lazy(() => import("../pages/Login"));

export {
    Notfound,
    QueryClient,
    QueryClientProvider,
    ReactQueryDevtools,
    RecoilRoot,
    Route,
    Routes,
    Spinner,
    Suspense,
    lazy,
    Cart,
    Home,
    Login,
    Orders,
    ProductInfo,
    Wishlist
};
