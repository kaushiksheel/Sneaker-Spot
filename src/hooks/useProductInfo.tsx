import { IProducts } from "../interfaces/IProducts";
import { getProductsBySlug } from "../services/getProducts";
import { useQuery } from "react-query";

export const useProductInfo = (slug: string) => {
    const { data, isLoading, error } = useQuery<IProducts>(
        ["productInfo", slug],
        () => getProductsBySlug(slug as string),
        {
            enabled: slug.length > 0,
            staleTime: Infinity
        }
    );
    return { data, error, isLoading };
};
