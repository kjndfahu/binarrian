export function StackingBlock({logo, title, number, exchRate}:{logo: string, title:string, number:number, exchRate: string}) {
    return (
        <div
            className="relative w-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div className="flex flex-col md:w-full w-[300px] bg-[#070322] gap-2 rounded-[12px] gradient-border p-6">
                <div className="flex items-center gap-4">
                    <img src={logo} alt="btc"/>
                    <h5 className="text-[18px] text-white leading-[27px]">{title}</h5>
                </div>
                <h4 className="text-[25px] text-[#FFFFFF] mt-2 leading-[27px] font-semibold">{number}</h4>
                <p className="text-[16px] leading-6 text-[#A5ADCF]">{exchRate}</p>
            </div>
        </div>

    )
}