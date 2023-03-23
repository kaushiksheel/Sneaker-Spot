interface IProps {
    name: string;
    price: number;
    overview: string;
}

export const ProductInfo = ({ name, price, overview }: IProps) => {
    return (
        <>
            <h1 className="font-bold text-5xl">{name}</h1>
            <p className="text-2xl font-semibold mt-4">${price}</p>
            <p className="text-2xl font-normal mt-5 leading-10">{overview}</p>
        </>
    );
};
