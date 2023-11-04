interface ISelectableCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    isSelected?: boolean;
}

export const SelectableCard = ({
    children,
    isSelected,
    className,
    ...props
}: ISelectableCardProps) => {
    return (
        <div
            className={`border border-ms-light-grey rounded-lg hover:border-ms-purple hover:border-2 ${
                isSelected
                    ? "bg-ms-lightest-grey border-ms-purple border-2"
                    : ""
            } ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
