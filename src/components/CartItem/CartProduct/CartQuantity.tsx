import Select from "react-select";
import { useRecoilState } from "recoil";
import { options } from "../../../data/options";
import { cartState } from "../../../imports/cart";

interface IProps {
    quantity: number;
    name: string;
}

export const CartQuantity = ({ quantity, name }: IProps) => {
    const [cartItems, setCartItems] = useRecoilState(cartState);

    const handleCartQuantity = (value: number) => {
        setCartItems(
            cartItems.map((item) => (item.name === name ? { ...item, quantity: value } : item))
        );
    };

    return (
        <Select
            classNamePrefix="select"
            placeholder={quantity}
            options={options}
            className="text-xl "
            onChange={(e) => handleCartQuantity(e?.value as number)}
        />
    );
};
