import { IToggleProps } from "@/components/PlanToggle";
import { Switch } from "@radix-ui/react-switch";

export const Toggle = ({ checked, handleChange, ...props }: IToggleProps) => {
    return (
        <div className="flex items-center space-x-2" {...props}>
            <Switch
                checked={checked}
                onClick={handleChange}
                className="bg-ms-denim items-center relative inline-flex flex-shrink-0 h-[20px] w-[38px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200"
            >
                <span
                    className={`${
                        checked ? "translate-x-5 bg-white" : "translate-x-[2px] bg-white"
                    } pointer-events-none inline-block h-[12px] w-[12px] rounded-full transform transition-transform ease-in-out duration-200`}
                />
            </Switch>
        </div>
    );
};
