import { useRecoilState, useRecoilValue } from "recoil";
import { CartItem } from "../components/CartItem";
import { CartTotal } from "../components/CartTotal";
import { useCartItems } from "../hooks/useCartItems";

import { cartState } from "../recoil/atoms/cartAtom";
import { cartLengthSelector as CartLengthSelector } from "../recoil/selectors/cartSelector";
import { useEffect } from "react";
import { Spinner } from "../components/Spinner";
import { IProducts } from "../interfaces/IProducts";

export {
    useRecoilState,
    useRecoilValue,
    CartItem,
    CartTotal,
    useCartItems,
    cartState,
    CartLengthSelector,
    Spinner,
    useEffect
};
export type { IProducts };
