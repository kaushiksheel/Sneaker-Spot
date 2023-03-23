import { IProducts } from "../interfaces/IProducts";
import { useQuery } from "react-query";
import { getWishlistItems } from "../services/wishlistService";

export const useWishlist = () => {
    const { data, error, isLoading } = useQuery<IProducts[]>("wishlist", getWishlistItems);

    return { data, error, isLoading };
};
