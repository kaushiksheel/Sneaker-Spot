import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useRecoilState } from "recoil";
import { IProducts } from "../interfaces/IProducts";
import { wishlistState } from "../recoil/atoms/wishlistAtom";
import {
    addToWishlist as AddToWishlist,
    removeFromWishlist as RemoveFromWishlist
} from "../services/wishlistService";

export {
    AddToWishlist,
    HeartIcon,
    HeartIconSolid,
    RemoveFromWishlist,
    useRecoilState,
    wishlistState
};
export type { IProducts };
