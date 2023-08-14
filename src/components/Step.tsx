import { ActiveStepCounter, InactiveStepCounter } from "./StepCounter";

interface IStepProps extends React.HTMLAttributes<HTMLDivElement> {
    stepCount: number;
    stepName: string;
    isActive?: boolean;
}

export const Step = ({ stepCount, stepName, isActive }: IStepProps) => {
    const upperCaseName = stepName.toUpperCase();

    return (
        <div className="flex items-center content-start mb-8">
            <div className="mr-4">
                {isActive ? (
                    <ActiveStepCounter stepCount={stepCount} />
                ) : (
                    <InactiveStepCounter stepCount={stepCount} />
                )}
            </div>
            <div>
                <p className="text-[#ABBCFF] font-[400] tracking-wide text-xs">
                    {`STEP ${stepCount}`}
                </p>
                <p className="text-white tracking-widest text-sm">
                    {upperCaseName}
                </p>
            </div>
        </div>
    );
};
