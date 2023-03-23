import { ItemDivider } from "../ItemDivider";
import { CartAction } from "./CartAction";
import { CartTotalWrapper } from "./CartTotalWrapper";

export const CartTotal = () => {
    return (
        <CartTotalWrapper>
            <h3 className="text-4xl font-bold text-white">Cart total</h3>
            <div className="flex items-center justify-between text-white mt-10 text-2xl font-semibold">
                <p>Quantity</p>
                <p>x3</p>
            </div>

            <div className="flex items-center justify-between text-white mt-10 text-2xl font-semibold">
                <p>Subtotal</p>
                <p>$212</p>
            </div>
            <ItemDivider />
            <CartAction />
        </CartTotalWrapper>
    );
};
