import { FormContext } from "@/context/FormContext";
import AddOnsPage from "@/pages/AddOns/AddOns";
import PersonalInfoPage from "@/pages/PersonalInfo/PersonalInfo";
import SelectPlanPage from "@/pages/SelectPlan/SelectPlan";
import Summary from "@/pages/Summary/Summary";
import ThankYouPage from "@/pages/ThankYouPage/ThankYouPage";
import { useContext } from "react";
import { Step } from "./Step";

export type StepsInfo = {
    count: number;
    name: string;
    content: JSX.Element;
    enabled: boolean;
};

const stepsInfo: StepsInfo[] = [
    {
        count: 1,
        name: "Your Info",
        content: <PersonalInfoPage />,
        enabled: true
    },
    {
        count: 2,
        name: "Select Plan",
        content: <SelectPlanPage />,
        enabled: true
    },
    {
        count: 3,
        name: "Add-Ons",
        content: <AddOnsPage />,
        enabled: true
    },
    {
        count: 4,
        name: "Summary",
        content: <Summary />,
        enabled: true
    },
    {
        count: 5,
        name: "Thank You",
        content: <ThankYouPage />,
        enabled: false
    }
];

export const Stepper = () => {
    const { currentStep } = useContext(FormContext);

    return (
        <div className="absolute w-[inherit] height-[inherit] flex">
            <div className="py-10 px-8 w-[30%]">
                {stepsInfo?.map(
                    (step) =>
                        step.enabled && (
                            <Step stepCount={step.count} stepName={step.name} key={step.count} isActive={currentStep == step.count ?? false} />
                        )
                )}
            </div>
            <div className="w-[70%] pt-10 pb-8 px-[100px] content-between flex flex-col">
                {stepsInfo?.map((step) => step.count === currentStep && <div key={step.count}>{step.content}</div>)}
            </div>
        </div>
    );
};
