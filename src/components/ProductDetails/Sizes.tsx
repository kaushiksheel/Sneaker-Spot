import { ISizes } from "../../interfaces/IProducts";
import { SizeButton } from "./SizeButton";

interface IProps {
    sizes: ISizes[];
}

export const Sizes = ({ sizes }: IProps) => {
    return (
        <div className="mt-7">
            <p className="text-3xl font-semibold mb-5">Sizes</p>
            <div className="flex flex-wrap gap-6">
                {sizes?.map(({ id, size }) => (
                    <SizeButton key={id} size={size} />
                ))}
            </div>
        </div>
    );
};
