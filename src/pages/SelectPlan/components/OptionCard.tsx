import { SelectableCard } from "@/components/SelectableCard";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Icon } from "../../../components/Icon";
import { IPlanOptions } from "../planOptions";

interface IOptionCardProps {
    plan: IPlanOptions;
    benefits?: string;
    isSelected: boolean;
    onClick: () => void;
}

const lookUpTable = {
    monthly: "mo",
    yearly: "yr"
};

export const OptionCard = ({ plan: { icon, color, title, price }, isSelected, benefits, onClick }: IOptionCardProps) => {
    const { formData } = useContext(FormContext);
    const { paymentFrequency } = formData;
    const priceLabel = lookUpTable[paymentFrequency];

    return (
        <SelectableCard isSelected={isSelected} onClick={onClick} className="w-[138px] h-40 px-4 py-5">
            <div className="h-full flex flex-col justify-between">
                <Icon color={color} icon={icon} />

                <div className="footer">
                    <p>{title}</p>
                    <p className="font-normal text-[15px] whitespace-no-wrap text-ms-grey leading-7 ">
                        ${price[paymentFrequency]}/{priceLabel}
                    </p>
                    {paymentFrequency === "yearly" && <p className="font-normal text-xs leading-5">{benefits}</p>}
                </div>
            </div>
        </SelectableCard>
    );
};
