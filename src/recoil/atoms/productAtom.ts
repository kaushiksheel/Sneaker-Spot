import { atom } from "recoil";
import { IProducts } from "../../interfaces/IProducts";

export const productsState = atom<IProducts[]>({
    key: "productsState",
    default: []
});
