"use client";

import { useRef } from "react";
import { Step } from "./Step";

type StepsInfo = {
    count: number;
    name: string;
    content?: JSX.Element;
};

const stepsInfo: StepsInfo[] = [
    {
        count: 1,
        name: "Your Info"
    },
    {
        count: 2,
        name: "Select Plan"
    },
    {
        count: 3,
        name: "Add-Ons"
    },
    {
        count: 4,
        name: "Summary"
    }
];

export const Stepper = () => {
    const step = useRef(stepsInfo[0]);
    const activeStep = step.current.count;

    return (
        <div className="flex">
            <div>
                {stepsInfo?.map((step) => (
                    <Step
                        stepCount={step.count}
                        stepName={step.name}
                        key={step.count}
                        isActive={activeStep == step.count ?? false}
                    />
                ))}
            </div>

            {step.current.content && <div>{step.current.content}</div>}
        </div>
    );
};
