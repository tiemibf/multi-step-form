import { MouseEventHandler } from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    children: string;
    buttonColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Button = ({
    children,
    buttonColor = "denim",
    onClick
}: IButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`bg-ms-${buttonColor} text-white rounded-lg px-6 py-3 tracking-wider font-[500]`}
        >
            {children}
        </button>
    );
};
