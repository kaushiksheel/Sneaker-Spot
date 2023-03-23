import axios from "axios";
import { IProducts } from "../interfaces/IProducts";

const Api_Link = "https://jordan-shoes-api.onrender.com";

export const getProducts = async (): Promise<IProducts[]> => {
    const { data } = await axios.get(`${Api_Link}/shoes`);
    return data as IProducts[];
};

export const getProductsBySlug = async (slug: string): Promise<IProducts> => {
    const { data } = await axios.get(`${Api_Link}/shoes/${slug}`);
    return data as IProducts;
};
