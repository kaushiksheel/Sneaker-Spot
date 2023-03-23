import { IProducts } from "../../interfaces/IProducts";
import { CardAction } from "./CardAction";
import { CardInfo } from "./CardInfo";
import { CardMedia } from "./CardMedia";
import { Like } from "./Like";

interface IProps {
    product: IProducts;
}

export const ShoeCard = ({ product }: IProps) => {
    const { img, slug, name, price } = product;

    return (
        <div className="w-full h-fit bg-[#F6F6F6] overflow-hidden relative ">
            <CardMedia img={img} slug={slug} />
            <CardInfo name={name} price={price} />
            <CardAction product={product} />
            <Like product={product} />
        </div>
    );
};
