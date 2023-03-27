import { ChangeEvent, useEffect } from "react";
import { useRecoilState } from "recoil";
import { productsState, useState } from "../imports/home";

export const SearchBox = () => {
    const [products, setProducts] = useRecoilState(productsState);
    const [query, setQuery] = useState("");

    useEffect(() => {
        const items = products?.filter((product) => {
            if (query === "") {
                return products; // include all items if search box is empty
            } else {
                return product.name.toLowerCase().includes(query.toLowerCase());
            }
        });
        setProducts(items);
    }, [query]);

    return (
        <form className=" items-center hidden md:flex">
            <label htmlFor="simple-search" className="sr-only">
                Search
            </label>
            <div className="relative w-[300px]">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-6 h-6 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"></path>
                    </svg>
                </div>
                <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search"
                    required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setQuery(e.currentTarget.value)}
                />
            </div>
        </form>
    );
};
