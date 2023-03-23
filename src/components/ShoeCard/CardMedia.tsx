import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useNavigate } from "react-router-dom";

interface IProps {
    img: string;
    slug: string;
}

export const CardMedia = ({ img, slug }: IProps) => {
    const navigate = useNavigate();
    return (
        <span className="hover:scale-[1.1] transition-all ease-in-out block">
            <LazyLoadImage
                alt={"an item"}
                src={img}
                width={"100%"}
                className="object-cover  h-[250px]  cursor-pointer "
                effect="blur"
                loading="lazy"
                onClick={() => navigate(`/${slug}`)}
            />
        </span>
    );
};
