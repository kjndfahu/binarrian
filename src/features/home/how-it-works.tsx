import {LogoRound} from "@/shared/ui/logo-round.tsx";
import {HowItWorksBlock} from "@/features/home/how-it-works-block.tsx";

export function HowItWorks() {
    return (
        <div className="flex flex-col items-center gap-10 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6">
            <h2 className="xl:text-[60px] lg:text-[52px] md:text-[45px] sm:text-[38px] text-[32px] xl:leading-[60px] lg:leading-[56px] leading-[48px] text-center how-it-works-title font-normal">How
                It Works?</h2>
            <p className="lg:text-[20px] text-[16px] text-center lg:leading-6 leading-4 text-center 2xl:w-[991px] lg:w-[800px] md:w-[600px] sm:w-[480px] w-[320px] how-it-works-text font-normal">Comprehensive
                4-step process: from seamless platform registration to advanced trading tools access, including account
                setup, deposit management, trading strategy development, and profit withdrawal</p>
            <div className="flex flex-col relative z-[2] items-center w-full gap-10 mt-10">
                <LogoRound size="w-[111px] h-[110px]" icon="/img/layers.svg"/>
                <div
                    className="flex md:gap-0 gap-20 md:flex-row flex-col items-center md:mt-[60px] mt-[120px] w-full md:justify-between">
                    <HowItWorksBlock logo="/img/lamp.svg" title="Register" text="Quick sign-up for instant access"/>
                    <HowItWorksBlock logo="/img/start-trading.svg" title="Start Trading"
                                     text="Begin your crypto journey"/>
                </div>
                <div className="md:w-auto w-full flex items-center justify-center mt-[50px]">
                    <HowItWorksBlock logo="/img/rocket.svg" title="Earn Money" text="Grow your wealth with crypto"/>
                </div>
                <img className="absolute w-full h-full" src="/img/board.png" alt="board"/>
                <img className="md:flex hidden absolute top-[55px] 2xl:w-[77%] xl:w-[70%] w-[60%]" src="/img/node.png"
                     alt="node"/>
                <img className="md:flex hidden absolute top-[55px]" src="/img/node-2.png" alt="node"/>
            </div>
        </div>
    )
}