import {
    QueryClient,
    QueryClientProvider,
    ReactQueryDevtools,
    RecoilRoot,
    Spinner,
    Suspense,
    Routes
} from "./imports/app";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <Suspense fallback={<Spinner />}>
                    <Routes />
                </Suspense>
            </RecoilRoot>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default App;
