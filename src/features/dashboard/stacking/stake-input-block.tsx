export function StakeInputBlock({firstText, secText, firstLogo, secLogo}:{firstText: string, secText: string, firstLogo: string, secLogo: string}) {
    return (
        <div className="flex flex-col w-full gap-[10px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="rounded-full p-1 faq-bg">
                        <img src={firstLogo} alt="input"/>
                    </div>
                    <p className="text-[14px] leading-[22px] text-[#5D6588]">{firstText}</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="rounded-full p-1 faq-bg">
                        <img src={secLogo} alt="input"/>
                    </div>
                    <p className="text-[14px] leading-[22px] text-[#5D6588]">{secText}</p>
                </div>
            </div>
            <div
                className="flex w-full gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                <input placeholder="0.05"
                       className=" text-[17px] outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                       type="number"/>
                <div className="flex items-center text-white gap-[7px]">
                    <h5 className="text-[16px] leading-[27px] font-semibold">0.1</h5>
                    <h5 className="text-[16px] leading-[27px] font-semibold">ETH</h5>
                </div>
            </div>
        </div>
    )
}