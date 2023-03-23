import { selector } from "recoil";
import { wishlistState } from "../atoms/wishlistAtom";

export const wishlistItems = selector({
    key: "cartItems",
    get: ({ get }) => {
        const wishlistItems = get(wishlistState);
        return wishlistItems;
    }
});

export const wishlistLength = selector({
    key: "cartLength",
    get: ({ get }) => {
        const wishlistItems = get(wishlistState);
        return wishlistItems.length;
    }
});
