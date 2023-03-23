import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from "react-responsive-carousel";
import { IThumbnails } from "../interfaces/IProducts";

interface IProps {
    images: IThumbnails[];
}

export const Carousel = ({ images }: IProps) => {
    return (
        <ReactCarousel className="">
            {images?.map(({ id, img }) => (
                <img key={id} src={img} alt="shoe product" />
            ))}
        </ReactCarousel>
    );
};
