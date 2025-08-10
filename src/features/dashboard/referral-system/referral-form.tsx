export function ReferralForm(){
    return (
        <div className="flex w-full gap-5">
            <div className="flex flex-col w-full gap-[14px]">
                <label className="text-[10px] leading-[13px] text-white font-medium" htmlFor="">Your Referral
                    Link</label>
                <div
                    className="flex items-center justify-between w-full rounded-full cursor-pointer referral-bg border-[1px] border-[#D0DCFF8F] py-[13px] px-[18px]">
                    <p className="text-[12px] text-white">https://binarrian.org/code</p>
                    <img src="/img/copy.svg" alt="copy"/>
                </div>
            </div>

            <div className="flex flex-col w-full gap-[14px]">
                <label className="text-[10px] leading-[13px] text-white font-medium" htmlFor="">Your Referral
                    Code</label>
                <div
                    className="flex items-center justify-between w-full rounded-full referral-bg border-[1px] border-[#D0DCFF8F] py-[13px] px-[18px]">
                    <p className="text-[12px] text-white">OJDKSKHDD20</p>
                </div>
            </div>
        </div>
    )
}