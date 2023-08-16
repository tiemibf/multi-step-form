interface IPageTitleProps extends React.HTMLAttributes<HTMLParagraphElement> {
    title: string;
    subtitle: string;
}
export const PageTitle = ({ title, subtitle }: IPageTitleProps) => {
    return (
        <div>
            <h1 className="text-[32px]">{title}</h1>
            <p className="font-normal text-[15px] whitespace-no-wrap text-[#9699AA] leading-7">
                {subtitle}
            </p>
        </div>
    );
};
