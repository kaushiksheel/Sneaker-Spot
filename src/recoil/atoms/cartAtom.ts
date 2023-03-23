import { atom } from "recoil";
import { IProducts } from "../../interfaces/IProducts";

export const cartState = atom<IProducts[]>({
    key: "cartState",
    default: []
});
