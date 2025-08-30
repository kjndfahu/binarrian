import {Logo} from "@/features/token-listing/logo.tsx";

export function HowItWorksBlock({title, text, logo}:{title: string, text: string, logo: string}){
    return (
        <div
            className="flex flex-col how-it-works-bg h-[180px] sm:w-[374px] w-full rounded-[20px] relative gap-7 p-[26px] info-bg border-[1px] border-[#FFFFFF33] items-center justify-center">
            <Logo size="w-[62px] h-[62px]" icon={logo}/>
            <div className="flex items-center w-full justify-between">
                <img src="/img/star.svg"/>
                <img src="/img/star.svg"/>
            </div>
            <div className="flex flex-col items-center justify-cenetr text-center text-white gap-5">
                <h3 className="text-[30px] capitalize leading-[30px]">{title}</h3>
                <p className="text-[16px]">{text}</p>
            </div>
        </div>
    )
}