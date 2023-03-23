import { Link } from "react-router-dom";
import { IProducts } from "../../../interfaces/IProducts";
import { CartMedia } from "./CartMedia";
import { CartQuantity } from "./CartQuantity";
import { RemoveCartItem } from "./RemoveCartItem";

interface IProps {
    item: IProducts;
}

export const CartProduct = ({ item }: IProps) => {
    const { img, name, price, quantity, slug } = item;

    return (
        <div className="flex mb-5">
            <div className="flex flex-1 items-center space-x-6">
                <CartMedia img={img} />
                <Link to={`/${slug}`} className="text-2xl font-semibold">
                    {name}
                </Link>
                ;
            </div>
            <div className="flex items-center space-x-6 ">
                <CartQuantity quantity={quantity} />
                <p className="text-2xl font-semibold">${price}</p>
                <RemoveCartItem name={name} />
            </div>
        </div>
    );
};
