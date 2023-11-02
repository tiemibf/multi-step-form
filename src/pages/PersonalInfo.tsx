import { Input } from "@/components/Input";
import { PageTitle } from "@/components/PageTitle";

export const PersonalInfoPage = () => {
    return (
        <div>
            <div className="flex-1 w-full mb-8">
                <PageTitle
                    title="Personal Info"
                    subtitle="Please provide your name, email address, and phone number."
                />
            </div>

            <Input label="Name" name="name" placeholder="e.g. Stephen King" />
            <Input
                label="Email Address"
                name="email"
                placeholder="e.g. stephenking@lorem.com"
            />
            <Input
                label="Phone Number"
                name="phone"
                placeholder="e.g. +1 234 567 890"
            />
        </div>
    );
};
