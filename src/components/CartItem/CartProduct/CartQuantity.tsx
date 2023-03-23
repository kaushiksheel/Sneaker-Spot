import Select from "react-select";
import { options } from "../../../data/options";

interface IProps {
    quantity: number;
}

export const CartQuantity = ({ quantity }: IProps) => {
    return (
        <Select
            classNamePrefix="select"
            placeholder={quantity}
            options={options}
            className="text-xl "
        />
    );
};
