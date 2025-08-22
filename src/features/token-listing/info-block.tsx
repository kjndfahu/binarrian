import {Logo} from "@/features/token-listing/logo.tsx";

export function InfoBlock({title, text, logo}:{title: string, text: string, logo: string}){
    return (
        <div
            className="flex flex-col h-[203px] w-full rounded-[20px] relative gap-7 px-[26px] pt-[34px] info-bg border-[1px] border-white items-center justify-center">
            <Logo size="w-[62px] h-[62px]" icon={logo}/>
            <div className="absolute top-[26px] flex items-center w-full justify-between">
                <img className="absolute 2xl:left-[32px] xl:left-[28px] left-[22px]" src="/img/star.svg"/>
                <img className="absolute 2xl:right-[32px] xl:right-[28px] right-[22px]" src="/img/star.svg"/>
            </div>
            <div className="flex flex-col items-center justify-cenetr text-center text-white gap-4.5">
                <h3 className="text-[24px] capitalize leading-[26px] font-bold">{title}</h3>
                <p className="text-[13px] w-[67%]">{text}</p>
            </div>
        </div>
    )
}