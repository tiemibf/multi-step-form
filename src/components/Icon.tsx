interface IIconProps {
    color: string;
    icon: JSX.Element;
}

export const Icon = ({ color, icon }: IIconProps) => {
    return (
        <>
            <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16.5" cy="16.5" r="16.5" fill={color} />
                <g transform="translate(10,6)">{icon}</g>
            </svg>
        </>
    );
};
