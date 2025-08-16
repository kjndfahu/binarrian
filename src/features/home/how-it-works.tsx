import {LogoRound} from "@/shared/ui/logo-round.tsx";
import {HowItWorksBlock} from "@/features/home/how-it-works-block.tsx";

export function HowItWorks() {
    return (
        <div className="flex flex-col items-center gap-10 px-[70px]">
            <h2 className="text-[60px] text-center how-it-works-title font-normal">How It Works?</h2>
            <p className="text-[20px] text-center w-[991px] how-it-works-text font-normal">Comprehensive 4-step process: from seamless platform registration to advanced trading tools access, including account setup, deposit management, trading strategy development, and profit withdrawal</p>
            <div className="flex flex-col relative z-[2] items-center w-full gap-10 mt-10">
                <LogoRound size="w-[111px] h-[110px]" icon="/img/layers.svg"/>
                <div className="flex items-center mt-[60px] w-full justify-between">
                    <HowItWorksBlock logo="/img/browser.svg" title="3 million users" text="At the moment, our exchange has more than 3 million registered users from more than 150 countries & we continue to grow."/>
                    <HowItWorksBlock logo="/img/browser.svg" title="3 million users" text="At the moment, our exchange has more than 3 million registered users from more than 150 countries & we continue to grow."/>
                </div>
                <div className="mt-[50px]">
                    <HowItWorksBlock logo="/img/browser.svg" title="3 million users" text="At the moment, our exchange has more than 3 million registered users from more than 150 countries & we continue to grow."/>
                </div>
                <img className="absolute top-[50px] px-[180px] w-full z-[1]" src="/img/line.svg" alt="line"/>
            </div>
        </div>
    )
}