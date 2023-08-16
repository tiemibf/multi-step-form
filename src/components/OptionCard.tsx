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
        <div className="border border-[#D6D9E6] rounded-lg w-[138px] h-40  px-4 pt-5 pb-4 items-stretch">
            <div className="h-full">
                <Icon color={color} icon={icon} />
                <div className="footer">
                    <p>{title}</p>
                    <p className="font-normal text-[15px] whitespace-no-wrap text-[#9699AA] leading-7 ">
                        {price}
                        {pricePerTime}
                    </p>
                    {planOption === "yearly" && <p>{benefits}</p>}
                </div>
            </div>
        </div>
    );
};
