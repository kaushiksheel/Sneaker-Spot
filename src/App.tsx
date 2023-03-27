import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { RecoilRoot } from "recoil";
import Notfound from "./pages/Notfound";

const Home = lazy(() => import("./pages/Home"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductInfo = lazy(() => import("./pages/ProductInfo"));
const Orders = lazy(() => import("./pages/Orders"));
const Login = lazy(() => import("./pages/Login"));

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/shoes" element={<Home />} />
                        <Route path="/shoes/:slug" element={<ProductInfo />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<Notfound />} />
                    </Routes>
                </Suspense>
            </RecoilRoot>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
