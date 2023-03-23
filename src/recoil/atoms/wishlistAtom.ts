import { atom } from "recoil";
import { IProducts } from "../../interfaces/IProducts";

export const wishlistState = atom<IProducts[]>({
    key: "wishlistState",
    default: []
});
