export function ReferralInfo({title, text, amount}:{title:string, text:string, amount: string}) {
    return (
        <div className="flex pb-6 border-b-[1px] border-[#34384C] justify-between">
            <div className="flex flex-col gap-[10px]">
                <h5 className="text-[14px] leading-[17px] text-white font-semibold">{title}</h5>
                <p className="text-[12px] leading-[20px] text-[#808191] w-[217px]">{text}</p>
            </div>
            <h5 className="text-[14px] text-white leading-[17px] font-semibold">{amount}</h5>
        </div>
    )
}