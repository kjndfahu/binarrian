import { ReactNode } from "react";

export function HomeHero({title, text, form, padding}:{title: string, text?: string, form?:ReactNode, padding:string}){
    return (
        <div className={`flex flex-col gap-[26px] items-center justify-center ${padding} `}>
            <h1 className="text-[64px] text-center w-[800px] hero-text capitalize z-[4] leading-[84px] font-medium">
                {title}
            </h1>
            <p className="text-[20px] text-center z-4 w-[748px] hero-text">{text}</p>
            {form}
        </div>
    )
}