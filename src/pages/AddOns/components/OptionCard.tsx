import { Checkbox } from "@/components/Checkbox";
import { SelectableCard } from "@/components/SelectableCard";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

interface IOptionCardProps {
    title: string;
    description: string;
    price: number;
    isSelected: boolean;
    onClick: () => void;
}

const lookUpTable = {
    monthly: "mo",
    yearly: "yr"
};

export const OptionCard = ({
    title,
    description,
    price,
    isSelected,
    onClick
}: IOptionCardProps) => {
    const { formData } = useContext(FormContext);
    const { paymentFrequency } = formData;
    const priceLabel = lookUpTable[paymentFrequency];

    return (
        <SelectableCard
            isSelected={isSelected}
            onClick={onClick}
            className="w-[450px] h-21 px-6 py-[18px] cursor-pointer"
        >
            <div className="flex flex-1 items-center justify-between">
                <div className="flex gap-x-6 items-center">
                    <Checkbox checked={isSelected} handleChange={onClick} />
                    <div className="h-full flex flex-col justify-between">
                        <p>{title}</p>
                        <p className="font-normal text-sm text-ms-grey leading-6">
                            {description}
                        </p>
                    </div>
                </div>

                <div>
                    <p className="font-normal text-sm text-ms-purple">
                        +${price}/{priceLabel}
                    </p>
                </div>
            </div>
        </SelectableCard>
    );
};
