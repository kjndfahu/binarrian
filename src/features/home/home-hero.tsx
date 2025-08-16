import { ReactNode } from "react";

export function HomeHero({title, text, form, padding}:{title: string, text?: string, form?:ReactNode, padding:string}){
    return (
        <div className={`flex flex-col gap-[26px] items-center justify-center ${padding} `}>
            <h1 className="lg:text-[64px] sm:text-[48px] text-[40px] text-center lg:w-[800px] sm:w-[500px] w-[300px] hero-text capitalize z-[4] lg:leading-[84px] sm:leading-[75px] leading-[52px] font-medium">
                {title}
            </h1>
            <p className="text-[20px] text-center z-4 2xl:w-[748px] xl:w-[600px] lg:w-[480px] w-[330px] hero-text">{text}</p>
            {form}
        </div>
    )
}