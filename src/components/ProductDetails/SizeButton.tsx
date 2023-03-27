import { useState } from "react";

interface IProps {
    size: string;
}

export const SizeButton = ({ size }: IProps) => {
    const [isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected(!isSelected);
    };

    return (
        <button
            onClick={handleClick}
            className={`border border-black text-2xl px-10 py-3 rounded-md ${
                isSelected ? "bg-black" : "bg-white"
            } ${
                isSelected ? "text-white" : "text-black"
            } hover:bg-black hover:text-white transition-all ease-in-out`}
        >
            {size}
        </button>
    );
};
