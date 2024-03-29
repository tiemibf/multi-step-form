import { ControlButtons } from "@/components/ControlButtons";
import { PageTitle } from "@/components/PageTitle";
import { PlanOptionCard } from "@/components/PlanOptionCard";
import { FormContext } from "@/context/FormContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlanToggle } from "../../components/PlanToggle";
import { planOptions } from "../../components/planOptions";

interface IErrors {
    planOption?: boolean;
}

const SelectPlanPage = () => {
    const toggleOptions = {
        yearly: true,
        monthly: false
    };
    const { formData, setFormData, setCurrentStep } = useContext(FormContext);
    const { paymentFrequency } = formData;
    const toggleInitialValue = toggleOptions[paymentFrequency] as boolean;
    const [toggleChecked, setToggleChecked] = useState(toggleInitialValue);
    const [errors, setErrors] = useState<IErrors>({
        planOption: false
    });
    const isFormValid = !!formData.planOption;

    const handleOptionCardClick = (planOption: string, planPrice: number) => {
        setErrors({ planOption: false });
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

    const handleNextStepButton = () => {
        if (!isFormValid) {
            setErrors({
                planOption: !formData.planOption
            });
            return;
        }

        setCurrentStep((curr: number) => curr + 1);
    };

    return (
        <div className="w-full">
            <div className="page-title flex-1 w-full mb-8">
                <PageTitle title="Select your plan" subtitle="You have the option of monthly or yearly billing." />
            </div>
            <p className="text-sm font-normal text-ms-red mb-1">{errors.planOption && "Select at least one plan."} </p>
            <div className="flex space-x-4 mb-8">
                {planOptions.map((plan) => (
                    <PlanOptionCard
                        plan={plan}
                        key={uuidv4()}
                        isSelected={formData.planOption === plan.title}
                        error={errors.planOption as boolean}
                        onClick={() => handleOptionCardClick(plan.title, plan.price[paymentFrequency])}
                    />
                ))}
            </div>
            <PlanToggle checked={toggleChecked} handleChange={handleToggleChange} />
            <ControlButtons handleNextStepButton={handleNextStepButton} />
        </div>
    );
};

export default SelectPlanPage;
