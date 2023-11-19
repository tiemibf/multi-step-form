import { Stepper } from "@/components/Stepper";

export default function Home() {
    return (
        <>
            <aside className="bg-[url('../assets/bg-sidebar.svg')] bg-cover flex w-[274px] h-full rounded-xl pt-10 pl-8 content-start relative" />
            <Stepper />
        </>
    );
}
