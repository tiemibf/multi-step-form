import { Toggle } from "@/components/Toggle";

export interface IToggleProps extends React.HTMLAttributes<HTMLDivElement> {
    checked: boolean;
    handleChange: () => void;
}

export const PlanToggle = ({ checked, handleChange }: IToggleProps) => {
    return (
        <div className="bg-ms-lightest-grey h-12 rounded-lg flex justify-center items-center">
            <p className="text-sm">Monthly</p>
            <Toggle
                className="mx-6"
                checked={checked}
                handleChange={handleChange}
            />
            <p className="text-sm">Yearly</p>
        </div>
    );
};
