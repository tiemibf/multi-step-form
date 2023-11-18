import { Checkbox } from "@/components/Checkbox";
import { SelectableCard } from "@/components/SelectableCard";

interface IOptionCardProps {
    title: string;
    description: string;
    price: string;
    isSelected: boolean;
    onClick: () => void;
}

export const OptionCard = ({
    title,
    description,
    price,
    isSelected,
    onClick
}: IOptionCardProps) => {
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
                        {price}
                    </p>
                </div>
            </div>
        </SelectableCard>
    );
};
