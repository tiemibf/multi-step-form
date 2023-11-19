import { PageTitle } from "@/components/PageTitle";
import { FormContext } from "@/context/FormContext";
import { capitalizeFirstLetter } from "@/utils/helpers";
import { useContext } from "react";

export const Summary = () => {
    const { formData } = useContext(FormContext);
    const { planOption, planPrice, paymentFrequency, addOns } = formData;
    const payFreqAbbr = paymentFrequency === "monthly" ? "mo" : "yr";
    const addOnsPrice = addOns?.reduce((total, addOn) => total + addOn.price?.[paymentFrequency], 0) || 0;
    const totalPrice = planPrice + addOnsPrice;

    return (
        <>
            <div className="w-full">
                <div className="page-title flex-1 w-full mb-8">
                    <PageTitle title="Finishing up" subtitle="Double-check everything looks OK before confirming." />

                    <div className="bg-ms-lightest-grey rounded-lg flex items-center pt-4 pb-6 px-6 flex-col mt-9 mb-6">
                        <div className="flex justify-between w-full">
                            <p className="font-medium">
                                {planOption} ({capitalizeFirstLetter(paymentFrequency)})
                            </p>
                            <p>
                                {planPrice}/{payFreqAbbr}
                            </p>
                        </div>
                        <div className="bg-ms-grey bg-opacity-20 h-[1px] w-full mt-6 mb-4" />
                        <div className="flex flex-col gap-y-4 w-full">
                            {addOns?.map((addOn) => {
                                return (
                                    <div className="flex justify-between" key={addOn.title}>
                                        <p className="text-ms-grey font-normal text-sm">{addOn.title}</p>
                                        <p className="text-ms-denim font-normal text-sm">
                                            +${addOn.price?.[paymentFrequency]}/{payFreqAbbr}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <p className="font-normal text-sm text-ms-grey">Total ({paymentFrequency})</p>
                        <p className="text-xl text-ms-purple">
                            ${totalPrice}/{payFreqAbbr}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
