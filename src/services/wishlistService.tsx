import { IProducts } from "../interfaces/IProducts";
import { apiClient } from "./api-client";

export const getWishlistItems = async (): Promise<IProducts[]> => {
    const { data } = await apiClient("/get-wishlist-item", {
        headers: {
            "x-auth-token": localStorage.getItem("token")
        }
    });
    return data;
};

export const addToWishlist = (name: string, img: string, price: number, slug: string) =>
    apiClient.post("/add-to-wishlist", { name, img, price, slug });

export const removeFromWishlist = (name: string) =>
    apiClient.post("/remove-wishlist-item", { itemName: name });
