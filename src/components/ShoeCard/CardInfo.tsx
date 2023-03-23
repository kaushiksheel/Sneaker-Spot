interface IProps {
    name: string;
    price: number;
}

export const CardInfo = ({ name, price }: IProps) => {
    return (
        <div className="text-center py-4">
            <p className="font-semibold text-3xl">{name}</p>
            <p className="text-bold text-2xl text-gray-600 mt-3">${price}</p>
        </div>
    );
};
