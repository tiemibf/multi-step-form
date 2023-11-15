import { IForm } from "@/types/types";
import {
    Dispatch,
    ReactNode,
    SetStateAction,
    createContext,
    useState
} from "react";

interface IFormProviderProps {
    formData: IForm;
    setFormData: Dispatch<SetStateAction<IForm>>;
}

const FormContext = createContext<IFormProviderProps>({
    formData: {},
    setFormData: () => null
});

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<IForm>({
        name: "",
        email: "",
        phone: "",
        paymentFrequency: "monthly",
        addOns: [""]
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
