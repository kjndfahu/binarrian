export function AvatarBlock(){
    return (
        <div className="flex flex-col gap-8 pb-[32px] border-b-[1px] border-[#34384C]">
            <p className="text-[12px] leading-[16px] font-medium text-[#808191]">Your Avatar</p>
            <div className="flex items-center h-[80px] gap-[26px]">
                <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
                <div className="flex flex-col gap-[9px]">
                    <div className="h-[47px] space-x-4">
                        <button className="text-[14px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                            Upload New
                        </button>
                        <button className="text-[14px] font-semibold cursor-pointer rounded-full text-white py-3 px-[13px] border-[1px] border-[#ffffff]">
                            Delete Avatar
                        </button>
                    </div>
                    <p className="text-[14px] cursor-pointer text-[#8547F6] leading-[24px]">Use default avatar</p>
                </div>
            </div>
        </div>
    )
}