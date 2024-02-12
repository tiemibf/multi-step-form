import { ControlButtons } from "@/components/ControlButtons";
import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { useContext, useState } from "react";

interface IFormErrors {
    name: boolean;
    email: boolean;
    phone: boolean;
}

const PersonalInfoPage = () => {
    const { formData, setFormData, setCurrentStep } = useContext(FormContext);
    const [errors, setErrors] = useState<IFormErrors>({
        name: false,
        email: false,
        phone: false
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
    };

    const requiredFieldsValues = {
        name: formData?.name,
        email: formData?.email,
        phone: formData?.phone
    };

    const handleNextStepButton = () => {
        const isFormValid = Object.values(requiredFieldsValues).every((value) => value);

        if (!isFormValid) {
            setErrors({
                name: !requiredFieldsValues.name,
                email: !requiredFieldsValues.email,
                phone: !requiredFieldsValues.phone
            });

            return;
        }

        setCurrentStep((curr: number) => curr + 1);
    };

    return (
        <div>
            <div className="flex-1 w-full mb-8">
                <PageTitle title="Personal Info" subtitle="Please provide your name, email address, and phone number." />
            </div>

            <Input
                label="Name"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
                error={{ hasError: errors.name, message: "This field is required" }}
            />
            <Input
                label="Email Address"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                placeholder="e.g. stephenking@lorem.com"
                error={{ hasError: errors.email, message: "This field is required" }}
            />
            <Input
                label="Phone Number"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
                error={{ hasError: errors.phone, message: "This field is required" }}
            />

            <ControlButtons handleNextStepButton={handleNextStepButton} />
        </div>
    );
};

export default PersonalInfoPage;
