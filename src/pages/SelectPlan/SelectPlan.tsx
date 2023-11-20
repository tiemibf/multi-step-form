import { ControlButtons } from "@/components/ControlButtons";
import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { OptionCard } from "@/pages/SelectPlan/components/OptionCard";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlanToggle } from "./components/PlanToggle";
import { planOptions } from "./planOptions";

export const SelectPlanPage = () => {
    const toggleOptions = {
        yearly: true,
        monthly: false
    };
    const { formData, setFormData } = useContext(FormContext);
    const { paymentFrequency } = formData;
    const toggleInitialValue = toggleOptions[paymentFrequency] as boolean;
    const [toggleChecked, setToggleChecked] = useState(toggleInitialValue);

    const handleOptionCardClick = (planOption: string, planPrice: number) => {
        setFormData({ ...formData, planOption, planPrice });
    };

    const handleToggleChange = () => {
        setToggleChecked(!toggleChecked);
        const newSelectedPaymentOption = !toggleChecked ? "yearly" : "monthly";
        const selectedPlan = planOptions.filter((option) => option.title === formData.planOption);

        planOptions.find((plan) => plan.title === formData.planOption);
        setFormData({
            ...formData,
            paymentFrequency: newSelectedPaymentOption,
            planPrice: selectedPlan?.[0]?.price?.[newSelectedPaymentOption]
        });
    };

    return (
        <div className="w-full">
            <div className="page-title flex-1 w-full mb-8">
                <PageTitle title="Select your plan" subtitle="You have the option of monthly or yearly billing." />
            </div>
            <div className="flex space-x-4 mb-8">
                {planOptions.map((plan) => (
                    <OptionCard
                        plan={plan}
                        key={uuidv4()}
                        isSelected={formData.planOption === plan.title}
                        onClick={() => handleOptionCardClick(plan.title, plan.price[paymentFrequency])}
                    />
                ))}
            </div>
            <PlanToggle checked={toggleChecked} handleChange={handleToggleChange} />
            <ControlButtons />
        </div>
    );
};
