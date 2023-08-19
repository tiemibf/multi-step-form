// { icon, color, price, title }: IOptionCardProps

import { Icon } from "./Icon";

interface IOptionCardProps {
    icon: JSX.Element;
    color: string;
    price: string;
    title: string;
    planOption: "monthly" | "yearly";
    benefits?: string;
}
export const OptionCard = ({
    icon,
    color,
    price,
    title,
    planOption,
    benefits
}: IOptionCardProps) => {
    const pricePerTime = planOption === "monthly" ? "/mo" : "/yr";
    return (
        <div className="border border-ms-light-grey rounded-lg w-[138px] h-40 px-4 py-5">
            <div className="h-full flex flex-col justify-between">
                <Icon color={color} icon={icon} />

                <div className="footer">
                    <p>{title}</p>
                    <p className="font-normal text-[15px] whitespace-no-wrap text-ms-grey leading-7 ">
                        {price}
                        {pricePerTime}
                    </p>
                    {planOption === "yearly" && <p>{benefits}</p>}
                </div>
            </div>
        </div>
    );
};
