interface IIconProps {
    color: string;
    icon: JSX.Element;
}

export const Icon = ({ color, icon }: IIconProps) => {
    return (
        <div className="rounded-full w-10 h-10 flex items-center justify-center" style={{ backgroundColor: color }}>
            {icon}
        </div>
    );
};
