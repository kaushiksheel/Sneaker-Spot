import { IProducts } from "../interfaces/IProducts";
import { apiClient } from "./api-client";

export const addToCart = (
    name: string,
    img: string,
    price: number,
    quantity: number,
    slug: string
) => apiClient.post("/add-to-cart", { name, img, price, quantity, slug });

export const getCartItems = async (): Promise<IProducts[]> => {
    const { data } = await apiClient.get("/get-cart-item");
    return data as IProducts[];
};

export const removeCartItem = (name: string) =>
    apiClient.post("/remove-cart-item", { itemName: name });
