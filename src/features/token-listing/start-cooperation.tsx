import {Form} from "@/features/token-listing/form.tsx";

export function StartCooperation() {
    return (
        <div
            className="flex flex-col relative overflow-x-hidden overflow-y-hidden items-center justify-center 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 md:gap-12 gap-6 py-[111px]">
            <h2 className="md:text-[48px] sm:text-[36px] text-[32px] text-center about-text">Let's start
                cooperation</h2>
            <p className="text-[16px] text-center text-[#CACACA]">We can list your token on our exchange within 48
                hours</p>
            <Form/>

            <img className="absolute  pointer-events-none select-none z-[1] h-full bottom-[-300px] right-[-500px]"
                 src="/img/coop.png" alt="coop"/>
            <img className="absolute pointer-events-none select-none z-[1] h-full bottom-[10px] lg:left-[-450px] left-[-620px]"
                 src="/img/coop2.png" alt="coop"/>
        </div>
    )
}