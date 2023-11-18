"use client";

import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { IForm } from "@/types/types";
import { useContext } from "react";
import { OptionCard } from "./components/OptionCard";

const addOnOptions = [
    {
        title: "Online service",
        description: "Access to multiplayer games",
        priceMonthly: "+$1/mo",
        priceYearly: "+$10/yr"
    },
    {
        title: "Larger storage",
        description: "Extra 1TB of cloud save",
        priceMonthly: "+$2/mo",
        priceYearly: "+$20/yr"
    },
    {
        title: "Customizable profile",
        description: "Custom theme on your profile",
        priceMonthly: "+$2/mo",
        priceYearly: "+$20/yr"
    }
];

export const AddOnsPage = () => {
    const { formData, setFormData } = useContext(FormContext);
    const priceOption =
        formData.paymentFrequency === "yearly" ? "priceYearly" : "priceMonthly";

    const handleOptionCardClick = (addOn: string) => {
        const currentAddOns = formData.addOns ? [...formData.addOns] : [];
        const isAddOnSelected = currentAddOns.includes(addOn);
        const newAddOns = isAddOnSelected
            ? currentAddOns.filter((selectedAddOn) => selectedAddOn !== addOn)
            : [...currentAddOns, addOn];

        setFormData((formData: IForm) => {
            return {
                ...formData,
                addOns: newAddOns
            };
        });
    };

    return (
        <div className="w-full">
            <div className="page-title flex-1 w-full mb-8">
                <PageTitle
                    title="Pick add-ons"
                    subtitle="Add-ons help enhance your gaming experience."
                />
            </div>
            <div className="flex flex-col gap-y-4">
                {addOnOptions.map((option) => (
                    <OptionCard
                        title={option.title}
                        description={option.description}
                        price={option[priceOption]}
                        isSelected={
                            formData.addOns?.includes(option.title) ?? false
                        }
                        onClick={() => handleOptionCardClick(option.title)}
                        key={option.title}
                    />
                ))}
            </div>
        </div>
    );
};
