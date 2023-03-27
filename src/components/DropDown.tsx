import { IOptions } from "../interfaces/IOptons";

interface IProps {
    title: string;
    options: IOptions[];
    setSelectedOption: (selectedOption: string) => void;
}

export const DropDown = ({ title, options, setSelectedOption }: IProps) => {
    return (
        <select
            onChange={(e) => setSelectedOption(e.target.value)}
            className=" border border-gray-300  text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue={title}>{title}</option>
            {options.map(({ label, value }) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};
