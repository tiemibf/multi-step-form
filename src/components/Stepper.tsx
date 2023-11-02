"use client";

import { PersonalInfoPage } from "@/pages/PersonalInfo";
import { SelectPlanPage } from "@/pages/SelectPlan/SelectPlan";
import { useState } from "react";
import { Button } from "./Button";
import { Step } from "./Step";

type StepsInfo = {
    count: number;
    name: string;
    content?: JSX.Element;
};

const stepsInfo: StepsInfo[] = [
    {
        count: 1,
        name: "Your Info",
        content: <PersonalInfoPage />
    },
    {
        count: 2,
        name: "Select Plan",
        content: <SelectPlanPage />
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
    const [currentStep, setCurrentStep] = useState(1);
    const isLastStep = currentStep === stepsInfo.length;
    const goToNextStep = () => {
        setCurrentStep((curr) => (!isLastStep ? curr + 1 : curr));
    };

    return (
        <div className="flex flex-1 w-full" style={{ position: "relative" }}>
            <div>
                {stepsInfo?.map((step) => (
                    <Step
                        stepCount={step.count}
                        stepName={step.name}
                        key={step.count}
                        isActive={currentStep == step.count ?? false}
                        onClick={() => setCurrentStep(step.count)}
                    />
                ))}
            </div>
            <div
                style={{
                    position: "absolute",
                    right: "-615px",
                    bottom: "-230px"
                }}
            >
                {stepsInfo?.map(
                    (step) => step.count === currentStep && step.content
                )}
                <Button onClick={goToNextStep}>Next Step</Button>
            </div>
        </div>
    );
};
