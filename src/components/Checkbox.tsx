interface ICheckboxProps {
    checked: boolean;
    handleChange: () => void;
}

export const Checkbox = ({ checked, handleChange }: ICheckboxProps) => {
    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={handleChange}
                className="sr-only"
            />
            <div
                className={`w-5 h-5 border border-ms-light-grey rounded-[4px] flex items-center justify-center ${
                    checked ? "bg-ms-purple" : "bg-white"
                }`}
            >
                {checked && (
                    <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M5 13l4 4L19 7"></path>
                    </svg>
                )}
            </div>
        </>
    );
};
