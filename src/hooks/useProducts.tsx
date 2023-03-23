import { IProducts } from "../interfaces/IProducts";
import { useQuery } from "react-query";
import { getProducts } from "../services/getProducts";

export const useProducts = () => {
    const { data, error, isLoading } = useQuery<IProducts[]>("products", getProducts);

    return { data, error, isLoading };
};
