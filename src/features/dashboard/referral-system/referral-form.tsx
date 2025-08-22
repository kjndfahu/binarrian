export function ReferralForm(){
    return (
        <div className="flex w-full md:flex-row flex-col md:gap-5 gap-6">
            <div className="flex flex-col md:w-1/2 w-full md:gap-[14px] gap-2">
                <label className="md:text-[10px] text-[14px] md:leading-[13px] leading-[19px] text-white font-medium" htmlFor="">Your Referral
                    Link</label>
                <div
                    className="flex items-center justify-between w-full rounded-full cursor-pointer referral-bg border-[1px] border-[#D0DCFF8F] py-[13px] px-[18px] md:min-h-[46px] min-h-[69px]">
                    <p className="text-[12px] text-white truncate">https://binarrian.org/code</p>
                    <img src="/img/copy.svg" alt="copy"/>
                </div>
            </div>

            <div className="flex flex-col md:w-1/2 w-full md:gap-[14px] gap-2">
                <label className="md:text-[10px] text-[14px] md:leading-[13px] leading-[19px] text-white font-medium" htmlFor="">Your Referral
                    Code</label>
                <div
                    className="flex items-center justify-between w-full rounded-full referral-bg border-[1px] border-[#D0DCFF8F] py-[13px] px-[18px] md:min-h-[46px] min-h-[69px]">
                    <p className="text-[12px] text-white truncate">OJDKSKHDD20</p>
                </div>
            </div>
        </div>
    )
}