import { IThumbnails } from "../interfaces/IProducts";
import { Carousel } from "../lib/Carousel";

interface IProps {
    images: IThumbnails[];
}

export const ProductMedia = ({ images }: IProps) => {
    return (
        <div className="col-span-1 lg:col-span-2">
            <Carousel images={images} />
        </div>
    );
};
