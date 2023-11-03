interface IStepCounterProps {
    stepCount: number;
}

export const ActiveStepCounter = ({ stepCount }: IStepCounterProps) => {
    return (
        <>
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16.5" cy="16.5" r="16.5" fill="#BEE2FD" />
                <text
                    x="16"
                    y="16"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#022959"
                >
                    {stepCount}
                </text>
            </svg>
        </>
    );
};

export const InactiveStepCounter = ({ stepCount }: IStepCounterProps) => {
    return (
        <>
            <svg
                width="33"
                height="33"
                viewBox="0 0 33 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <circle cx="16.5" cy="16.5" r="16" stroke="white" />
                <text
                    x="16"
                    y="16"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                >
                    {stepCount}
                </text>
            </svg>
        </>
    );
};
