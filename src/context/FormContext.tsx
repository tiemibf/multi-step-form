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

const defaultValues = {
    name: "",
    email: "",
    phone: "",
    planOption: "",
    planPrice: "",
    paymentFrequency: "monthly",
    addOns: []
};

const FormContext = createContext<IFormProviderProps>({
    formData: { ...(defaultValues as IForm) },
    setFormData: () => null
});

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<IForm>({
        ...(defaultValues as IForm)
    });

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
