import { IProducts } from "../interfaces/IProducts";

const getTotalQuantity = (cartItems: IProducts[]) => {
    const totalQuantity = cartItems?.map((item) => item.quantity).reduce((a, b) => a + b, 0);
    return totalQuantity;
};

const getSubtotal = (cartItems: IProducts[]) => {
    const prices = cartItems.map((item) => item.price * item.quantity);
    const subtotal = prices.reduce((a, b) => a + b, 0);
    return subtotal;
};

export { getSubtotal, getTotalQuantity };
