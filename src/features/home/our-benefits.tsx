import { BenefitsSlider } from "./benefits-slider";

export function OurBenefits (){
    return (
        <div className="flex overflow-y-hidden relative pb-[100px] flex-col items-center xl:gap-10 md:gap-8 gap-6">
            <div className="py-3 px-[22px] w-[186px] border-[1px] border-[#FFFFFF1A] text-normal text-center our-benefits text-[24px] leading-[24px] text-white rounded-full">
                Our Benefits
            </div>
            <h2 className="xl:text-[60px] lg:text-[52px] md:text-[45px] sm:text-[38px] text-[32px] xl:leading-[60px] lg:leading-[56px] leading-[48px] text-center z-[2] how-it-works-title font-normal">Discover the Benefits You Will Gain</h2>
            <p className="lg:text-[24px] lg:leading-6 md:text-[20px] text-[16px] md:leading-5 leading-8 text-center z-[2] xl:w-[900px] lg:w-[700px] md:w-[650px] sm:w-[520px] w-[327px] how-it-works-text font-normal">Discover what makes Binarrian unique among competitors. See why it excels in cryptocurrency with innovative technology and user-friendly interface.</p>
            <BenefitsSlider/>
            <img className="absolute top-[190px] pointer-events-none select-none z-[1] h-full w-[100vw]" src="/img/benefits.png" alt="benefits"/>
        </div>
    )
}