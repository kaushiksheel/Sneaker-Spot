import { Header } from "../components/Header";
import { ShoeCard } from "../components/ShoeCard";
import { ShoeCardSkeleton } from "../components/ShoeCardSkeleton";
import { useProducts } from "../hooks/useProducts";

function Home() {
    const { data: products, isLoading } = useProducts();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    return (
        <>
            <Header />
            <main className="max-w-container mx-auto px-5 lg:px-0 my-10">
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {isLoading && skeletons.map((skeleton) => <ShoeCardSkeleton key={skeleton} />)}
                    {products?.map((product) => (
                        <ShoeCard key={product.name} product={product} />
                    ))}
                </div>
            </main>
        </>
    );
}

export default Home;
