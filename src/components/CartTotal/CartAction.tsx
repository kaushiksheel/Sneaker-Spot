import { useState } from "react";
import { useRecoilValue } from "recoil";
import { cartItemsSelector as CartItemsSelector } from "../../recoil/selectors/cartSelector";
import { apiClient } from "../../services/api-client";
import { Spinner } from "../Spinner";

export const CartAction = () => {
    const cartItems = useRecoilValue(CartItemsSelector);
    const [loading, setLoading] = useState(false);

    const handleCheckout = () => {
        setLoading(true);
        apiClient
            .post("/checkout", { items: cartItems })
            .then(({ data }: { data: { url: string } }) => {
                setLoading(false);
                window.location = data.url as unknown as Location;
            })
            .catch((error) => {
                setLoading(false);
                throw new Error(error);
            });
    };

    return (
        <button
            onClick={handleCheckout}
            className="bg-white text-2xl text-center py-4 w-full rounded-lg font-semibold">
            {loading ? <Spinner /> : "Continue to Payment"}
        </button>
    );
};
