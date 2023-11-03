import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { useContext } from "react";

export const PersonalInfoPage = () => {
    const { formData, setFormData } = useContext(FormContext);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setFormData({ ...formData, [event.target.name]: value });
    };

    return (
        <div>
            <div className="flex-1 w-full mb-8">
                <PageTitle
                    title="Personal Info"
                    subtitle="Please provide your name, email address, and phone number."
                />
            </div>

            <Input
                label="Name"
                name="name"
                value={formData?.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
            />
            <Input
                label="Email Address"
                name="email"
                value={formData?.email}
                onChange={handleChange}
                placeholder="e.g. stephenking@lorem.com"
            />
            <Input
                label="Phone Number"
                name="phone"
                value={formData?.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
            />
        </div>
    );
};
