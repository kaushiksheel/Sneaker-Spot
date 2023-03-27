import { IBenefits, IProductInfo, IProducts } from "../../interfaces/IProducts";
import { CardAction } from "../ShoeCard/CardAction";
import { Accordian } from "./Accordian";
import { ProductInfo } from "./ProductInfo";

interface IProps {
    name: string;
    price: number;
    overview: string;
    productInfo: IProductInfo;
    benefits: IBenefits[];
    product: IProducts;
}

export const ProductDetails = ({
    name,
    price,
    overview,
    productInfo,
    benefits,
    product
}: IProps) => {
    return (
        <div className="pb-8">
            <ProductInfo name={name} price={price} overview={overview} />
            <Accordian title="Benefits">
                <ul>
                    {benefits?.map(({ id, text }) => (
                        <li className="mb-5" key={id}>
                            {text}
                        </li>
                    ))}
                </ul>
            </Accordian>
            <Accordian title="Product Information">{productInfo?.text}</Accordian>
            <CardAction product={product} border={true} />
        </div>
    );
};
