export function PromocodeForm(){
    return (
        <div className="flex md:flex-row flex-col w-full md:gap-5 gap-[30px]">
            <div className="flex flex-col w-full md:gap-[14px] gap-[19px]">
                <label className="md:text-[10px] text-[14px] md:leading-[13px] leading-[19px] text-white font-medium" htmlFor="">Your promocode</label>
                <div
                    className="flex items-center justify-between w-full rounded-full referral-bg border-[1px] border-[#D0DCFF8F] py-[13px] px-[18px] md:min-h-[46px] min-h-[69px]">
                    <p className="text-[12px] text-white">OJDKSKHDD20</p>
                </div>
            </div>
            <button className="text-[12px] self-end backdrop-blur-2xl md:h-[47px] h-[70px] text-white leading-[20px] visit-btn w-full cursor-pointer rounded-full">
                APPLY CODE
            </button>
        </div>
    )
}