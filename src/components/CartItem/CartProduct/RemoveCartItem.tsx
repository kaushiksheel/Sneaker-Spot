import { TrashIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { cartState } from "../../../recoil/atoms/cartAtom";
import { removeCartItem } from "../../../services/cartService";

interface IProps {
    name: string;
}

export const RemoveCartItem = ({ name }: IProps) => {
    const [cartItems, setCartItems] = useRecoilState(cartState);

    const handleRemoveCartItem = (name: string) => {
        setCartItems(cartItems.filter((cartItem) => cartItem.name !== name));
        removeCartItem(name);
    };

    return (
        <TrashIcon
            onClick={() => handleRemoveCartItem(name)}
            width={20}
            height={20}
            className="cursor-pointer text-gray-400 hover:text-black"
        />
    );
};
