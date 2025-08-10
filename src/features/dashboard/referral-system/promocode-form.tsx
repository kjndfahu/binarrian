export function PromocodeForm(){
    return (
        <div className="flex w-full gap-5">
            <div className="flex flex-col w-full gap-[14px]">
                <label className="text-[10px] leading-[13px] text-white font-medium" htmlFor="">Your promocode</label>
                <div
                    className="flex items-center justify-between w-full rounded-full referral-bg border-[1px] border-[#D0DCFF8F] py-[13px] px-[18px]">
                    <p className="text-[12px] text-white">OJDKSKHDD20</p>
                </div>
            </div>
            <button className="text-[12px] self-end backdrop-blur-2xl h-[47px] text-white leading-[20px] visit-btn w-full cursor-pointer rounded-full border-[1px] border-[#D0DCFF8Fs]">
                APPLY CODE
            </button>
        </div>
    )
}