import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { OptionCard } from "@/pages/SelectPlan/components/OptionCard";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlanToggle } from "./components/PlanToggle";
import { planOptions } from "./planOptions";

export const SelectPlanPage = () => {
    const [toggleChecked, setToggleChecked] = useState(false);
    const { formData, setFormData } = useContext(FormContext);
    const { paymentFrequency } = formData;

    const handleOptionCardClick = (planOption: string, planPrice: number) => {
        setFormData({ ...formData, planOption, planPrice });
    };

    const handleToggleChange = () => {
        setToggleChecked(!toggleChecked);
        const newSelectedPlanOption = !toggleChecked ? "yearly" : "monthly";
        const plan = planOptions.filter(
            (option) => option.title === formData.planOption
        );

        planOptions.find((plan) => plan.title === formData.planOption);
        setFormData({
            ...formData,
            paymentFrequency: newSelectedPlanOption,
            planPrice: plan?.[0]?.price?.[newSelectedPlanOption]
        });
    };

    return (
        <div className="w-full">
            <div className="page-title flex-1 w-full mb-8">
                <PageTitle
                    title="Select your plan"
                    subtitle="You have the option of monthly or yearly billing."
                />
            </div>
            <div className="flex space-x-4 mb-8">
                {planOptions.map((plan) => (
                    <OptionCard
                        color={plan.color}
                        icon={plan.icon}
                        price={`${plan.price[paymentFrequency]}`}
                        title={plan.title}
                        key={uuidv4()}
                        benefits={plan.benefits}
                        isSelected={formData.planOption === plan.title}
                        onClick={() =>
                            handleOptionCardClick(
                                plan.title,
                                plan.price[paymentFrequency]
                            )
                        }
                    />
                ))}
            </div>
            <PlanToggle
                checked={toggleChecked}
                handleChange={handleToggleChange}
            />
        </div>
    );
};
