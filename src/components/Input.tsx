interface IInputProps {
    placeholder: string;
    value?: string;
    name: string;
    label: string;
}

export const Input = ({ placeholder, name, label, value }: IInputProps) => {
    return (
        <div className="mb-6">
            <label htmlFor={name} className="text-[#022959 font-normal text-sm">
                {label}
            </label>
            <input
                placeholder={placeholder}
                value={value}
                name={name}
                className="border border-[#D6D9E6] rounded-lg h-12 w-full px-4 py-[10px] font-medium mt-1"
            />
        </div>
    );
};
