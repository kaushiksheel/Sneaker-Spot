import { Header } from "../components/Header";
import {
    DropDown,
    IOptions,
    IProducts,
    ShoeCard,
    ShoeCardSkeleton,
    productsState,
    sortOptions,
    useEffect,
    useProducts,
    useRecoilState,
    useState
} from "../imports/home";

function Home() {
    const { data, isLoading } = useProducts();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [products, setProducts] = useRecoilState(productsState);
    const [selectedOption, setSelectedOption] = useState("");

    useEffect(() => {
        setProducts(data as IProducts[]);
    }, [data]);

    useEffect(() => {
        if (selectedOption === "highToLow") {
            const sortedProducts = [...products].sort((a, b) => b.price - a.price);
            setProducts(sortedProducts);
        } else if (selectedOption === "lowToHigh") {
            const sortedProducts = [...products].sort((a, b) => a.price - b.price);
            setProducts(sortedProducts);
        }
    }, [selectedOption]);

    return (
        <>
            <Header />
            <main className="max-w-container mx-auto px-5 lg:px-0 my-10">
                <div className="flex justify-end mb-5 space-x-4">
                    <DropDown
                        setSelectedOption={setSelectedOption}
                        title="Sort by"
                        options={sortOptions as unknown as IOptions[]}
                    />
                </div>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {isLoading && skeletons.map((skeleton) => <ShoeCardSkeleton key={skeleton} />)}
                    {products?.map((product: IProducts) => (
                        <ShoeCard key={product.name} product={product} />
                    ))}
                </div>
            </main>
        </>
    );
}

export default Home;
