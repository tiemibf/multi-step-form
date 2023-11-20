"use client";

import { Stepper } from "@/components/Stepper";
import { FormProvider } from "@/context/FormContext";

export default function Home() {
    return (
        <>
            <aside className="bg-[url('../assets/bg-sidebar.svg')] bg-cover flex w-[274px] h-full rounded-xl pt-10 pl-8 content-start relative" />
            <FormProvider>
                <Stepper />
            </FormProvider>
        </>
    );
}
