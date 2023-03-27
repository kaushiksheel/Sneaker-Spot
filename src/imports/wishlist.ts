import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ShoeCard } from "../components/ShoeCard";
import { ShoeCardSkeleton } from "../components/ShoeCardSkeleton";
import { useWishlist } from "../hooks/useWishlistItems";
import { IProducts } from "../interfaces/IProducts";
import { wishlistState as WishlistState } from "../recoil/atoms/wishlistAtom";
import { wishlistLength } from "../recoil/selectors/wishlistSelector";

export {
    ShoeCard,
    ShoeCardSkeleton,
    WishlistState,
    useEffect,
    useRecoilState,
    useWishlist,
    wishlistLength
};
export type { IProducts };
