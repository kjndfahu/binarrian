export function BenefitBlock({ title, text, logo }: { title: string, text: string, logo:string }) {
    return (
        <div className="flex z-[2] flex-col justify-between h-[267px] rounded-[20px] lg:p-5 p-4 border-[1px] border-[#FFFFFF1F] w-full md:w-1/2">
            <div className="flex items-center justify-center aspect-square sm:w-[48px] w-[40px] sm:h-[48px] h-[40px] rounded-full benefit-icon benefit-shadow">
                <img className="w-6 h-6" src={logo} alt="logo"/>
            </div>
            <div className="flex flex-col 2xl:mt-15 mt-10 2xl:gap-3 gap-2.5">
                <h3 className="2xl:text-[24px] text-[20px] 2xl:leading-[40px] leading-[28px] text-white font-medium">{title}</h3>
                <p className="2xl:text-[16px] md:text-[14px] text-[13px] 2xl:leading-[24px] leading-[18px] text-white font-normal">{text}</p>
            </div>
        </div>
    );
}