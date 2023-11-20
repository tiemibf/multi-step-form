import { ChangeEventHandler } from "react";

interface IInputProps {
    placeholder: string;
    value?: string;
    name: string;
    label: string;
    error?: {
        hasError: boolean;
        message: string;
    };
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, name, label, value, error, onChange }: IInputProps) => {
    return (
        <div className="mb-6">
            <div className="flex justify-between">
                <label htmlFor={name} className="text-ms-denim font-normal text-sm">
                    {label}
                </label>
                {error?.hasError && <p className="font-bold text-ms-red text-sm">{error?.message}</p>}
            </div>
            <input
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className={`border rounded-lg h-12 w-full px-4 py-[10px] font-medium mt-1 focus:border-ms-purple ${
                    error?.hasError ? "border-ms-red" : "border-ms-light-grey"
                }`}
            />
        </div>
    );
};
