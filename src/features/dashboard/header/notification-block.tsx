export function NotificationBlock(){
    return (
        <div
            className="absolute z-[1000] right-[50px] md:top-[120px] top-[90px] flex flex-col gap-6 md:w-[375px] w-[270px] border-[1px] border-[#D0DCFF8F] backdrop-blur-2xl rounded-[20px] md:pt-12 pt-6 md:p-7 p-4 buy-crypto-bg">
            <div className="flex items-start notify-shadow md:gap-[30px] gap-4 pt-8 pb-5 relative">
                <img src="/img/purple-tick.svg" alt="purple-tick"/>
                <div className="flex flex-col gap-2">
                    <h5 className="text-[16px] w-[200px] leading-5 text-white font-semibold">Changing password on Binarrian</h5>
                    <p className="text-[14px] leading-6 text-[#808191] leading-6">10m ago</p>
                </div>
                <div className="absolute w-[12px] h-[12px] rounded-full bg-[#8547F6] bottom-[24px] right-0"/>
            </div>
            <div className="flex items-start notify-shadow md:gap-[30px] gap-4 pt-8 pb-5 relative">
                <img src="/img/purple-tick.svg" alt="purple-tick"/>
                <div className="flex flex-col gap-2">
                    <h5 className="text-[16px] w-[200px] leading-5 text-white font-semibold">Changing password on Binarrian</h5>
                    <p className="text-[14px] leading-6 text-[#808191] leading-6">10m ago</p>
                </div>
                <div className="absolute w-[12px] h-[12px] rounded-full bg-[#8547F6] bottom-[24px] right-0"/>
            </div>
            <div className="flex items-start notify-shadow md:gap-[30px] gap-4 pt-8 pb-5 relative">
                <img src="/img/purple-tick.svg" alt="purple-tick"/>
                <div className="flex flex-col gap-2">
                    <h5 className="text-[16px] w-[200px] leading-5 text-white font-semibold">Changing password on Binarrian</h5>
                    <p className="text-[14px] leading-6 text-[#808191] leading-6">10m ago</p>
                </div>
                <div className="absolute w-[12px] h-[12px] rounded-full bg-[#8547F6] bottom-[24px] right-0"/>
            </div>
        </div>
    )
}