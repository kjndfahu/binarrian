export function AvatarBlock(){
    return (
        <div className="flex flex-col gap-8 pb-[32px] border-b-[1px] border-[#34384C]">
            <p className="text-[12px] leading-[16px] font-medium text-[#808191]">Your Avatar</p>
            <div className="flex items-center md:justify-start justify-between h-[80px] gap-[26px]">
                <div className="md:w-[80px] w-[97px] md:h-[80px] h-[97px] rounded-full bg-black"></div>
                <div className="flex flex-col md:gap-[9px] gap-1.5">
                    <div className="h-[47px] md:space-x-4 space-x-1.5">
                        <button className="md:text-[14px] text-[10px] font-semibold cursor-pointer rounded-full text-white py-3 md:px-[18px] px-[14px] visit-btn">
                            Upload New
                        </button>
                        <button className="md:text-[14px] text-[10px] font-semibold cursor-pointer rounded-full text-white py-3 md:px-[13px] px-[10px] border-[1px] border-[#ffffff]">
                            Delete Avatar
                        </button>
                    </div>
                    <p className="md:text-[14px] text-[10px] md:text-start text-end cursor-pointer text-[#8547F6] md:leading-[24px] leading-[17px]">Use default avatar</p>
                </div>
            </div>
        </div>
    )
}