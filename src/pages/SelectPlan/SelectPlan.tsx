"use client";

import { AdvancedIcon } from "@/assets/AdvancedIcon";
import { ArcadeIcon } from "@/assets/ArcadeIcon";
import { ProIcon } from "@/assets/ProIcon";
import { OptionCard } from "@/components/OptionCard";
import { PageTitle } from "@/components/PageTitle";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const planOptions = [
    {
        icon: <ArcadeIcon />,
        color: "#FFAF7E",
        priceMonthly: "$9",
        priceYearly: "$90",
        title: "Arcade"
    },
    {
        icon: <AdvancedIcon />,
        color: "#F9818E",
        priceMonthly: "$12",
        priceYearly: "$120",
        title: "Advanced"
    },
    {
        icon: <ProIcon />,
        color: "#483EFF",
        priceMonthly: "$15",
        priceYearly: "$150",
        title: "Pro"
    }
];
export const SelectPlanPage = () => {
    const [selectedPlanOption, setSelectedPlanOption] = useState("");

    const handleOptionCardClick = (planOption: string) => {
        setSelectedPlanOption(planOption);
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
                        planOption="monthly"
                        isSelected={selectedPlanOption === planOption.title}
                        onClick={() => handleOptionCardClick(planOption.title)}
                    />
                ))}
            </div>
        </div>
    );
};
