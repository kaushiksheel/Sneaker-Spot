import { IProducts } from "../interfaces/IProducts";
import { useQuery } from "react-query";
import { getCartItems } from "../services/cartService";

export const useCartItems = () => {
    const { data, error, isLoading } = useQuery<IProducts[]>("cart", getCartItems);
    return { data, error, isLoading };
};
