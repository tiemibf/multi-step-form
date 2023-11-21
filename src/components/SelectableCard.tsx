interface ISelectableCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isSelected?: boolean | (() => boolean);
    error?: boolean;
}

export const SelectableCard = ({ children, isSelected, className, error, ...props }: ISelectableCardProps) => {
    return (
        <div
            className={`border-box border rounded-lg hover:border-ms-purple hover:border-2 cursor-pointer ${
                isSelected ? "bg-ms-lightest-grey border-ms-purple border-2" : error ? "border-ms-red border-2" : "border-ms-light-grey"
            } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
