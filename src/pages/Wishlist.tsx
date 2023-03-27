import { Header } from "../components/Header";
import {
    IProducts,
    ShoeCard,
    ShoeCardSkeleton,
    WishlistState,
    useEffect,
    useRecoilState,
    useWishlist,
    wishlistLength,
    useRecoilValue
} from "../imports/wishlist";

function Wishlist() {
    const { data: wishlistItems, isLoading } = useWishlist();
    const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [wishlistState, setWishlistState] = useRecoilState(WishlistState);
    const WishlistLength = useRecoilValue(wishlistLength);

    useEffect(() => {
        if (wishlistItems) {
            setWishlistState(wishlistItems as IProducts[]);
        }
    }, [wishlistItems]);
    return (
        <>
            <Header />
            <main className="max-w-container mx-auto px-5 lg:px-0 my-10">
                {WishlistLength < 1 ? (
                    <p className="text-3xl font-medium">Empty wishlist 😥😥</p>
                ) : (
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {isLoading &&
                            skeletons.map((skeleton) => <ShoeCardSkeleton key={skeleton} />)}
                        {wishlistState?.map((product) => (
                            <ShoeCard key={product.name} product={product} />
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}

export default Wishlist;
