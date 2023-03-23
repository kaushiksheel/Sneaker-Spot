import { selector } from "recoil";
import { cartState } from "../atoms/cartAtom";

export const cartItemsSelector = selector({
    key: "cartItemsSelector",
    get: ({ get }) => {
        const items = get(cartState);
        return items;
    }
});

export const cartLengthSelector = selector({
    key: "cartLengthSelector",
    get: ({ get }) => {
        const items = get(cartState);
        return items?.length;
    }
});
