import { IProducts } from "../../interfaces/IProducts";
import { ItemDivider } from "../ItemDivider";
import { CartAction } from "./CartAction";
import { CartTotalWrapper } from "./CartTotalWrapper";

interface IProps {
    cartItems: IProducts[];
}

export const CartTotal = ({ cartItems }: IProps) => {
    const totalQuantity = cartItems.map((item) => item.quantity).reduce((a, b) => a + b, 0);

    const getSubtotal = () => {
        const prices = cartItems.map((item) => item.price * item.quantity);
        const subtotal = prices.reduce((a, b) => a + b, 0);
        return subtotal;
    };

    return (
        <CartTotalWrapper>
            <h3 className="text-4xl font-bold text-white">Cart total</h3>
            <div className="flex items-center justify-between text-white mt-10 text-2xl font-semibold">
                <p>Quantity</p>
                <p>x{totalQuantity}</p>
            </div>

            <div className="flex items-center justify-between text-white mt-10 text-2xl font-semibold">
                <p>Subtotal</p>
                <p>${getSubtotal()}</p>
            </div>
            <ItemDivider />
            <CartAction />
        </CartTotalWrapper>
    );
};
