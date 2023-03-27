import { IProducts } from "../../interfaces/IProducts";
import { useRecoilState } from "recoil";
import { cartState } from "../../recoil/atoms/cartAtom";
import { addToCart as AddToCart } from "../../services/cartService";

interface IProps {
    product: IProducts;
    border: boolean;
}

export const CardAction = ({ product, border }: IProps) => {
    const [cartItems, setCartItems] = useRecoilState(cartState);

    const addToCart = () => {
        const { name, img, slug, price, quantity } = product;
        const existingItem = cartItems?.find((item) => item.name === product.name);
        if (existingItem) {
            const updatedItems = cartItems.map((item) => {
                if (item.name === product.name) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedItems);
        } else {
            // If the product is not yet in the cart, add it as a new item
            const newItem = { ...product, quantity: 1 };
            setCartItems([newItem, ...cartItems]);
        }

        AddToCart(name, img, price, quantity, slug);
    };

    return (
        <button
            className={`${
                border && "border"
            } font-bold text-black hover:text-white hover:bg-black text-center w-full text-2xl py-6 transition-all ease-in-out`}
            onClick={addToCart}
        >
            Add to cart
        </button>
    );
};
