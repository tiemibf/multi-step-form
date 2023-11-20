import { ControlButtons } from "@/components/ControlButtons";
import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { AddOn, IForm } from "@/types/types";
import { useContext } from "react";
import { OptionCard } from "./components/OptionCard";

const addOnOptions = [
    {
        title: "Online service",
        description: "Access to multiplayer games",
        price: {
            monthly: 1,
            yearly: 10
        }
    },
    {
        title: "Larger storage",
        description: "Extra 1TB of cloud save",
        price: {
            monthly: 2,
            yearly: 20
        }
    },
    {
        title: "Customizable profile",
        description: "Custom theme on your profile",
        price: {
            monthly: 2,
            yearly: 20
        }
    }
];

export const AddOnsPage = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleOptionCardClick = (addOn: AddOn) => {
        const currentAddOns = formData.addOns ? [...formData.addOns] : [];
        const isAddOnSelected = currentAddOns.some((curr) => curr.title === addOn.title);
        const newAddOns = isAddOnSelected ? currentAddOns.filter((selectedAddOn) => selectedAddOn !== addOn) : [...currentAddOns, addOn];

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
                <PageTitle title="Pick add-ons" subtitle="Add-ons help enhance your gaming experience." />
            </div>
            <div className="flex flex-col gap-y-4">
                {addOnOptions.map((addOn) => (
                    <OptionCard
                        addOn={addOn}
                        isSelected={formData.addOns?.some((curr) => curr.title === addOn.title) as boolean}
                        onClick={() => handleOptionCardClick(addOn)}
                        key={addOn.title}
                    />
                ))}
            </div>
            <ControlButtons />
        </div>
    );
};
