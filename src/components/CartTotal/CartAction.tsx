import { useRecoilValue } from "recoil";
import { cartItemsSelector as CartItemsSelector } from "../../recoil/selectors/cartSelector";
import { apiClient } from "../../services/api-client";

export const CartAction = () => {
    const cartItems = useRecoilValue(CartItemsSelector);

    const handleCheckout = () => {
        apiClient
            .post("/checkout", { items: cartItems })
            .then(
                ({ data }: { data: { url: string } }) =>
                    (window.location = data.url as unknown as Location)
            )
            .catch((error) => {
                throw new Error(error);
            });
    };

    return (
        <button
            onClick={handleCheckout}
            className="bg-white text-2xl text-center py-4 w-full rounded-lg font-semibold"
        >
            Continue to Payment
        </button>
    );
};
