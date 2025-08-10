export function ReferralTotal({title, info}:{title: string; info: string}) {
    return (
        <div className="flex flex-col pb-6 border-b-[1px] border-[#34384C] gap-[9px]">
            <h5 className="text-[16px] text-white leading-[17px] font-medium">{title}</h5>
            <h3 className="text-[34px] text-white font-semibold leading-[41px]">{info}</h3>
        </div>
    )
}