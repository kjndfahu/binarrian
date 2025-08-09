import { BenefitsSlider } from "./benefits-slider";

export function OurBenefits (){
    return (
        <div className="flex relative mb-[100px] flex-col items-center gap-10">
            <div className="py-3 px-[22px] w-[186px] border-[1px] border-[#FFFFFF1A] text-normal text-center our-benefits text-[24px] leading-[24px] text-white rounded-full">
                Our Benefits
            </div>
            <h2 className="text-[60px] text-center z-[2] how-it-works-title font-normal">Discover the Benefits You Will Gain</h2>
            <p className="text-[20px] text-center z-[2] w-[900px] how-it-works-text font-normal">Discover what makes Binarrian unique among competitors. See why it excels in cryptocurrency with innovative technology and user-friendly interface.</p>
            <BenefitsSlider/>
        </div>
    )
}