export function BuyCryptoBlock({text, image}:{text:string, image: string}){
    return (
        <div className="flex flex-col w-full lg:flex-row items-center justify-between rounded-[20px] backdrop-blur-lg py-[31px] px-[45px] buy-crypto-bg border-[1px] border-[#D0DCFF8F] min-h-[120px]">
            <div className="flex flex-col sm:flex-row items-center gap-5 w-full lg:w-auto">
                <img src={image} alt="img" className="w-[168px] h-[67px] rounded-[12px] flex-shrink-0"/>
                <p className="text-[15px] text-white w-full lg:w-[762px] text-center lg:text-left break-all overflow-wrap-anywhere leading-relaxed">{text}</p>
            </div>
            <button className="text-[18px] text-white leading-[30px] font-semibold rounded-full border-[1px] border-white w-full lg:w-[180px] h-[60px] cursor-pointer hover:bg-gradient-to-r hover:from-[#B189FF] hover:to-[#8144F6] hover:border-none transition-all duration-500 ease-in-out transform hover:scale-105 mt-6 lg:mt-0 flex-shrink-0">
                Visit
            </button>
        </div>
    )
}