import { Toggle } from "@/components/Toggle";

export const PlanToggle = () => {
    return (
        <div className="bg-ms-lightest-grey h-12 rounded-lg flex justify-center items-center">
            <p className="text-sm">Monthly</p>
            <Toggle className="mx-6" />
            <p className="text-sm">Yearly</p>
        </div>
    );
};
