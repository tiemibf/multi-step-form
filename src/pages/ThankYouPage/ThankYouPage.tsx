import { CheckIcon } from "@/assets/CheckIcon";

const ThankYouPage = () => {
    return (
        <div className="flex flex-col items-center h-fit gap-y-8">
            <CheckIcon />
            <div>
                <h1 className="text-[32px] flex justify-center">Thank you!</h1>
                <p className="font-normal text-[15px] whitespace-no-wrap text-[#9699AA] leading-7 flex text-center">
                    Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to
                    email us at support@loremgaming.com.
                </p>
            </div>
        </div>
    );
};

export default ThankYouPage;
