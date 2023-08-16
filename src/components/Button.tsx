import { MouseEventHandler } from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({ children, onClick }: IButtonProps) => {
    return (
        <div className="flex tracking-widest font-[500] justify-end mt-16">
            <button
                onClick={onClick}
                className="bg-[#022959] text-white rounded-lg px-6 py-3 tracking-wider font-[500]"
            >
                {children}
            </button>
        </div>
    );
};
