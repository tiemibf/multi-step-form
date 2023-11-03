import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";
import { useState } from "react";

export const PersonalInfoPage = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: ""
    });

    const handleChange = (event: any) => {
        const value = event.target.value;
        setState({ ...state, [event.target.name]: value });
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
                value={state.name}
                onChange={handleChange}
                placeholder="e.g. Stephen King"
            />
            <Input
                label="Email Address"
                name="email"
                value={state.email}
                onChange={handleChange}
                placeholder="e.g. stephenking@lorem.com"
            />
            <Input
                label="Phone Number"
                name="phone"
                value={state.phone}
                onChange={handleChange}
                placeholder="e.g. +1 234 567 890"
            />
        </div>
    );
};
