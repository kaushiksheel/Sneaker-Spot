import { ReactNode, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";

interface IProps {
    title: string;
    children: ReactNode;
}

export const Accordian = ({ title, children }: IProps) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="mt-11 border-y py-9 mb-10">
            <header
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between cursor-pointer">
                <p className="font-semibold text-3xl">{title}</p>
                {isOpen ? (
                    <ChevronUpIcon width={20} height={20} className="cursor-pointer" />
                ) : (
                    <ChevronDownIcon width={20} height={20} className="cursor-pointer" />
                )}
            </header>
            {isOpen && <div className="text-2xl leading-10 mt-4">{children}</div>}
        </div>
    );
};
