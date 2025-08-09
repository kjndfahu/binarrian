export function BuyCryptoBlock({text, image}:{text:string, image: string}){
    return (
        <div className="flex items-center justify-between rounded-[20px] backdrop-blur-lg py-[31px] px-[45px] buy-crypto-bg border-[1px] border-[#D0DCFF8F]">
            <div className="flex items-center gap-5">
                <img src={image} alt="img" className="w-[168px] h-[67px] rounded-[12px]"/>
                <p className="text-[15px] w-[762px] text-white">{text}</p>
            </div>
            <button className="text-[18px] text-white leading-[30px] font-semibold rounded-full border-[1px] border-white w-[180px] h-[60px] cursor-pointer hover:bg-gradient-to-r hover:from-[#B189FF] hover:to-[#8144F6] hover:border-none transition-all duration-500 ease-in-out transform hover:scale-105">
                Visit
            </button>
        </div>
    )
}