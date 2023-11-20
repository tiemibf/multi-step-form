import { IForm } from "@/types/types";
import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

interface IFormProviderProps {
    formData: IForm;
    currentStep: number;
    setFormData: Dispatch<SetStateAction<IForm>>;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

const defaultValues = {
    name: "",
    email: "",
    phone: "",
    planOption: "",
    planPrice: 0,
    paymentFrequency: "monthly",
    addOns: []
};

const FormContext = createContext<IFormProviderProps>({
    formData: { ...(defaultValues as IForm) },
    currentStep: 1,
    setFormData: () => null,
    setCurrentStep: () => null
});

const FormProvider = ({ children }: { children: ReactNode }) => {
    const [formData, setFormData] = useState<IForm>({
        ...(defaultValues as IForm)
    });
    const [currentStep, setCurrentStep] = useState(1);

    return <FormContext.Provider value={{ formData, setFormData, currentStep, setCurrentStep }}>{children}</FormContext.Provider>;
};

export { FormContext, FormProvider };
