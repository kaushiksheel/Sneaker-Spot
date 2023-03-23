import { ReactNode } from "react";

interface IProps {
    children: ReactNode;
}

export const CartTotalWrapper = ({ children }: IProps) => {
    return <div className="bg-[#18181B] p-10 rounded-lg h-fit">{children}</div>;
};
