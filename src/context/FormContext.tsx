import React, { createContext, useState } from "react";

interface IProps {
    children: React.ReactNode;
}

const FormContext = createContext({});

const FormProvider = ({ children }: IProps) => {
    const [formData, setFormData] = useState({});

    return (
        <FormContext.Provider value={{ formData, setFormData }}>
            {children}
        </FormContext.Provider>
    );
};

export { FormContext, FormProvider };
