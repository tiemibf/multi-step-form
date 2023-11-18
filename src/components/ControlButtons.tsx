import { Dispatch, SetStateAction } from "react";
import { Button } from "./Button";

interface IProps {
    currentStep: number;
    setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const ControlButtons = ({ currentStep, setCurrentStep }: IProps) => {
    const isFirstStep = currentStep === 1;
    const isSummaryStep = currentStep === 4;
    const thankYouPage = currentStep === 5;
    const goToNextStep = () => setCurrentStep((curr: number) => curr + 1);
    const goToPreviousStep = () => setCurrentStep((curr: number) => curr - 1);

    if (thankYouPage) return;

    return (
        <div
            className={`flex items-center mt-16 ${
                isFirstStep ? "justify-end" : "justify-between"
            }`}
        >
            {!isFirstStep && (
                <p
                    className="font-medium text-base text-ms-grey cursor-pointer hover:text-ms-denim"
                    onClick={goToPreviousStep}
                >
                    Go Back
                </p>
            )}
            {isSummaryStep ? (
                <Button buttonColor="purple" onClick={goToNextStep}>
                    Confirm
                </Button>
            ) : (
                <Button onClick={goToNextStep}>Next Step</Button>
            )}
        </div>
    );
};
