"use client";

import { FormProvider } from "@/context/FormContext";
import { AddOnsPage } from "@/pages/AddOns/AddOns";
import { PersonalInfoPage } from "@/pages/PersonalInfo/PersonalInfo";
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
        name: "Add-Ons",
        content: <AddOnsPage />
    },
    {
        count: 4,
        name: "Summary"
    }
];

export const Stepper = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === stepsInfo.length;
    const goToNextStep = () => {
        setCurrentStep((curr) => (!isLastStep ? curr + 1 : curr));
    };
    const goToPreviousStep = () => {
        setCurrentStep((curr) => (!isFirstStep ? curr - 1 : curr));
    };

    return (
        <FormProvider>
            <div className="flex flex-1 w-full relative">
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
                <div className="absolute right-[-615px] bottom-[-230px]">
                    {stepsInfo?.map(
                        (step) =>
                            step.count === currentStep && (
                                <div key={step.count}>{step.content}</div>
                            )
                    )}
                    <div
                        className={`flex items-center mt-16  ${
                            isFirstStep ? "justify-end" : "justify-between"
                        }`}
                    >
                        {!isFirstStep && (
                            <p
                                className="font-medium text-base text-ms-grey cursor-pointer"
                                onClick={goToPreviousStep}
                            >
                                Go Back
                            </p>
                        )}
                        <Button onClick={goToNextStep}>Next Step</Button>
                    </div>
                </div>
            </div>
        </FormProvider>
    );
};
