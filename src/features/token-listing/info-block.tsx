import {Logo} from "@/features/token-listing/logo.tsx";

export function InfoBlock({title, text, logo}:{title: string, text: string, logo: string}){
    return (
        <div
            className="flex flex-col h-[203px] w-full rounded-[20px] relative gap-7 p-[26px] info-bg border-[1px] border-white items-center justify-center">
            <Logo size="w-[62px] h-[62px]" icon={logo}/>
            <div className="flex items-center w-full justify-between">
                <img src="/img/star.svg"/>
                <img src="/img/star.svg"/>
            </div>
            <div className="flex flex-col items-center justify-cenetr text-center text-white gap-4.5">
                <h3 className="text-[24px] capitalize leading-[26px] font-bold">{title}</h3>
                <p className="text-[13px] w-[67%]">{text}</p>
            </div>
        </div>
    )
}