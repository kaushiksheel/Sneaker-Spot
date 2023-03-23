import {
    AddToWishlist,
    HeartIcon,
    HeartIconSolid,
    IProducts,
    RemoveFromWishlist,
    useRecoilState,
    wishlistState
} from "../../imports/like";

interface IProps {
    product: IProducts;
}

export const Like = ({ product }: IProps) => {
    const [wishlistItems, setWishlistItems] = useRecoilState(wishlistState);

    // checking if it is liked or not
    const isLiked = wishlistItems?.find((item) => item.id === product.id);

    const removeFromWishlist = () => {
        const item = wishlistItems.filter((item) => item.name !== product.name);
        setWishlistItems(item);
        RemoveFromWishlist(product.name);
    };

    const addToWishlist = () => {
        const { name, img, price, slug } = product;
        AddToWishlist(name, img, price, slug);
        setWishlistItems([...wishlistItems, product]);
    };

    const handleLike = () => {
        isLiked ? removeFromWishlist() : addToWishlist();
    };

    return isLiked ? (
        <HeartIconSolid
            onClick={handleLike}
            width={24}
            height={24}
            className="absolute top-8 right-8 cursor-pointer transition-all ease-in-out"
        />
    ) : (
        <HeartIcon
            onClick={handleLike}
            width={24}
            height={24}
            className="absolute top-8 right-8 cursor-pointer transition-all ease-in-out"
        />
    );
};
