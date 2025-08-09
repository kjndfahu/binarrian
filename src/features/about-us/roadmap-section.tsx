import { LogoRound } from "@/shared/ui/logo-round";

export function RoadmapSection({title, date, text}:{title: string, date:string, text:string}){
    return (
        <div className="flex flex-col z-[2] items-center justify-center pt-[20px] gap-[48px]">
            <LogoRound icon="/img/layers.svg" size="w-[57px] h-[57px]"/>
            <h3 className="text-[32px] uppercase font-bold about-text">{date}</h3>
            <div className="flex flex-col z-[2] gap-[30px]">
                <h5 className="text-[24px] z-[2] about-text font-bold uppercase">{title}</h5>
                <div className="flex items-center justify-center rounded-[20px] text-[20px] leading-10 text-[#CACACA] p-10 border-[1px] border-[#D0DCFF0D] roadmap-section">
                    {text}
                </div>
            </div>
        </div>
    )
}