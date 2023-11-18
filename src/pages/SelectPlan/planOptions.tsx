import { AdvancedIcon } from "@/assets/AdvancedIcon";
import { ArcadeIcon } from "@/assets/ArcadeIcon";
import { ProIcon } from "@/assets/ProIcon";

export interface IPlanOptions {
    icon: JSX.Element;
    color: string;
    price: {
        monthly: number;
        yearly: number;
    };
    title: string;
    benefits: string;
}

export const planOptions: IPlanOptions[] = [
    {
        icon: <ArcadeIcon />,
        color: "#FFAF7E",
        price: {
            monthly: 9,
            yearly: 90
        },
        title: "Arcade",
        benefits: "2 months free"
    },
    {
        icon: <AdvancedIcon />,
        color: "#F9818E",
        price: {
            monthly: 12,
            yearly: 120
        },
        title: "Advanced",
        benefits: "2 months free"
    },
    {
        icon: <ProIcon />,
        color: "#483EFF",
        price: {
            monthly: 15,
            yearly: 150
        },
        title: "Pro",
        benefits: "2 months free"
    }
];
