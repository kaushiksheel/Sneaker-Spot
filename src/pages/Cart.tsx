import { Header } from "../components/Header";

import {
    useRecoilState,
    useRecoilValue,
    CartItem,
    CartTotal,
    useCartItems,
    cartState,
    CartLengthSelector,
    IProducts,
    Spinner,
    useEffect
} from "../imports/cart";

function Cart() {
    const { data, isLoading } = useCartItems();
    const cartLength = useRecoilValue(CartLengthSelector);
    const [cartItems, setCartItems] = useRecoilState(cartState);

    useEffect(() => {
        if (data) {
            setCartItems(data as IProducts[]);
        }
    }, [data]);

    return (
        <>
            <Header />
            <main className="my-10 max-w-container mx-auto px-5 lg:px-0 ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-28">
                    {cartLength < 1 ? (
                        <p className="text-3xl font-semibold">
                            Your cart is empty😥😥 {isLoading && <Spinner />}
                        </p>
                    ) : (
                        <>
                            <CartItem />
                            <CartTotal cartItems={cartItems} />
                        </>
                    )}
                </div>
            </main>
        </>
    );
}

export default Cart;
