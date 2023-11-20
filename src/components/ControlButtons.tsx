import { FormContext } from "@/context/FormContext";
import { useContext } from "react";
import { Button } from "./Button";

interface IProps {
    handleNextStepButton?: () => void;
}

export const ControlButtons = ({ handleNextStepButton }: IProps) => {
    const { currentStep, setCurrentStep } = useContext(FormContext);
    const isFirstStep = currentStep === 1;
    const isSummaryStep = currentStep === 4;
    const thankYouPage = currentStep === 5;
    const goToNextStep = () => setCurrentStep((curr: number) => curr + 1);
    const goToPreviousStep = () => setCurrentStep((curr: number) => curr - 1);

    if (thankYouPage) return;

    return (
        <div className={`flex items-center mt-16 ${isFirstStep ? "justify-end" : "justify-between"}`}>
            {!isFirstStep && (
                <p className="font-medium text-base text-ms-grey cursor-pointer hover:text-ms-denim" onClick={goToPreviousStep}>
                    Go Back
                </p>
            )}
            {isSummaryStep ? (
                <Button buttonColor="purple" onClick={goToNextStep}>
                    Confirm
                </Button>
            ) : (
                <Button onClick={handleNextStepButton || goToNextStep}>Next Step</Button>
            )}
        </div>
    );
};
