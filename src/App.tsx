import {
    Notfound,
    QueryClient,
    QueryClientProvider,
    ReactQueryDevtools,
    RecoilRoot,
    Route,
    Routes,
    Spinner,
    Suspense,
    Cart,
    Home,
    Login,
    Orders,
    ProductInfo,
    Wishlist
} from "./imports/app";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Suspense fallback={<Spinner />}>
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
