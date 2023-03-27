import { getSubtotal, getTotalQuantity } from "../../helpers/cartCalculations";
import { IProducts } from "../../interfaces/IProducts";
import { ItemDivider } from "../ItemDivider";
import { CartAction } from "./CartAction";
import { CartTotalWrapper } from "./CartTotalWrapper";

interface IProps {
    cartItems: IProducts[];
}

export const CartTotal = ({ cartItems }: IProps) => {
    return (
        <CartTotalWrapper>
            <h3 className="text-4xl font-bold text-white">Cart total</h3>
            <div className="flex items-center justify-between text-white mt-10 text-2xl font-semibold">
                <p>Quantity</p>
                <p>x{getTotalQuantity(cartItems)}</p>
            </div>

            <div className="flex items-center justify-between text-white mt-10 text-2xl font-semibold">
                <p>Subtotal</p>
                <p>${getSubtotal(cartItems)}</p>
            </div>
            <ItemDivider />
            <CartAction />
        </CartTotalWrapper>
    );
};
