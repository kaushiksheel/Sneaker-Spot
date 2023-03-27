import { selector } from "recoil";
import { wishlistState } from "../atoms/wishlistAtom";

export const wishlistItems = selector({
    key: "wishlistItems",
    get: ({ get }) => {
        const wishlistItems = get(wishlistState);
        return wishlistItems;
    }
});

export const wishlistLength = selector({
    key: "wishlistLength",
    get: ({ get }) => {
        const wishlistItems = get(wishlistState);
        return wishlistItems?.length;
    }
});
