"use client";

import { AdvancedIcon } from "@/assets/AdvancedIcon";
import { ArcadeIcon } from "@/assets/ArcadeIcon";
import { ProIcon } from "@/assets/ProIcon";
import { OptionCard } from "@/components/OptionCard";
import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { PlanToggle } from "./components/PlanToggle";

const planOptions = [
    {
        icon: <ArcadeIcon />,
        color: "#FFAF7E",
        priceMonthly: "$9",
        priceYearly: "$90",
        title: "Arcade",
        benefits: "2 months free"
    },
    {
        icon: <AdvancedIcon />,
        color: "#F9818E",
        priceMonthly: "$12",
        priceYearly: "$120",
        title: "Advanced",
        benefits: "2 months free"
    },
    {
        icon: <ProIcon />,
        color: "#483EFF",
        priceMonthly: "$15",
        priceYearly: "$150",
        title: "Pro",
        benefits: "2 months free"
    }
];
export const SelectPlanPage = () => {
    const [checked, setChecked] = useState(false);
    const { formData, setFormData } = useContext(FormContext);
    const selectedPlanOption = checked ? "yearly" : "monthly";

    const handleOptionCardClick = (planOption: string) => {
        setFormData({ ...formData, planOption: planOption });
    };

    const handleToggleChange = () => {
        setChecked(!checked);
        const newSelectedPlanOption = !checked ? "yearly" : "monthly";
        setFormData({
            ...formData,
            paymentFrequency: newSelectedPlanOption
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
                {planOptions.map((planOption) => (
                    <OptionCard
                        color={planOption.color}
                        icon={planOption.icon}
                        price={planOption.priceMonthly}
                        title={planOption.title}
                        key={uuidv4()}
                        selectedPlanOption={selectedPlanOption}
                        benefits={planOption.benefits}
                        isSelected={formData.planOption === planOption.title}
                        onClick={() => handleOptionCardClick(planOption.title)}
                    />
                ))}
            </div>
            <PlanToggle checked={checked} handleChange={handleToggleChange} />
        </div>
    );
};
