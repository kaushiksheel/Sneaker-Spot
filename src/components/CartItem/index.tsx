import { ItemDivider } from "../ItemDivider";
import { CartHeader } from "./CartHeader";
import { CartProduct } from "./CartProduct";
import { useRecoilValue } from "recoil";

import { cartItemsSelector } from "../../recoil/selectors/cartSelector";
import React from "react";

export const CartItem = () => {
    const cartItems = useRecoilValue(cartItemsSelector);

    return (
        <div className="col-span-1 md:col-span-2">
            <CartHeader />
            <ItemDivider />
            {cartItems?.map((item) => (
                <React.Fragment key={item.name}>
                    <CartProduct item={item} />
                    <ItemDivider />
                </React.Fragment>
            ))}
        </div>
    );
};
