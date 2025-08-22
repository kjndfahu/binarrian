export function BenefitBlock({ title, text, logo }: { title: string, text: string, logo:string }) {
    return (
        <div className="flex z-[2] flex-col justify-between h-[267px] rounded-[20px] p-5 border-[1px] border-[#FFFFFF1F] w-full md:w-1/2">
            <div className="flex items-center justify-center aspect-square w-[48px] h-[48px] rounded-full benefit-icon benefit-shadow">
                <img className="w-6 h-6" src={logo} alt="logo"/>
            </div>
            <div className="flex flex-col mt-15 gap-3">
                <h3 className="text-[24px] leading-[40px] text-white font-medium">{title}</h3>
                <p className="text-[16px] leading-[24px] text-white font-normal">{text}</p>
            </div>
        </div>
    );
}