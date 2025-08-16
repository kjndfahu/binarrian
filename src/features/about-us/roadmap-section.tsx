import { LogoRound } from "@/shared/ui/logo-round";

export function RoadmapSection({title, date, text}:{title: string, date:string, text:string}){
    return (
        <div className="flex flex-col z-[2] items-center justify-center pt-[20px] gap-[48px]">
            <LogoRound icon="/img/layers.svg" size="w-[57px] h-[57px]"/>
            <h3 className="2xl:text-[32px] lg:text-[28px] md:text-[26px] text-[24px] uppercase font-bold about-text">{date}</h3>
            <div className="flex flex-col z-[2] gap-[30px]">
                <h5 className="text-[24px] md:text-left text-center z-[2] about-text font-bold uppercase">{title}</h5>
                <div className="flex items-center justify-center rounded-[20px] text-[20px] leading-10 text-[#CACACA] lg:p-10 md:p-9 p-8 border-[1px] border-[#D0DCFF0D] roadmap-section">
                    {text}
                </div>
            </div>
        </div>
    )
}