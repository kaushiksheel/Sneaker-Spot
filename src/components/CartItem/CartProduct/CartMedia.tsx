import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface IProps {
    img: string;
}

export const CartMedia = ({ img }: IProps) => {
    return (
        <LazyLoadImage
            alt={"an item"}
            src={img}
            width={64}
            height={64}
            className="object-cover"
            effect="blur"
            loading="lazy"
        />
    );
};
