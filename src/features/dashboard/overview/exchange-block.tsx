export function ExchangeBlock(){
    return (
        <div className="flex flex-col lg:pt-0 pt-6 gap-6">
            <div className="flex items-center justify-between">
                <h4 className="text-[20px] leading-6 font-bold text-white">Exchange</h4>
                <img src="/img/exchange.svg" alt="exchange"/>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex border-b-[1px] border-[#34384C] py-[14px]">
                    <input placeholder="100"
                           className="text-[18px] w-full leading-[27px] flex-1 outline-0 ring-0 placeholder:text-white text-white"
                           type="text"/>
                    <div className="flex items-center cursor-pointer gap-4 border-l-[1px] border-[#34384C] pl-4">
                        <img className="w-6 h-6" src="/img/eth-icon.svg" alt="icon"/>
                        <h5 className="text-[18px] text-white leading-[26px] font-semibold">USD</h5>
                        <img className="rotate-90 w-5 h-5" src="/img/arrow-right.svg" alt="arrow"/>
                    </div>
                </div>

                <div className="flex border-b-[1px] border-[#34384C] py-[14px]">
                    <input placeholder="0.074153"
                           className="text-[18px] w-full leading-[27px] flex-1 outline-0 ring-0 placeholder:text-white text-white"
                           type="text"/>
                    <div className="flex items-center cursor-pointer gap-4 border-l-[1px] border-[#34384C] pl-4">
                        <img className="w-6 h-6" src="/img/btc-icon.svg" alt="icon"/>
                        <h5 className="text-[18px] text-white leading-[26px] font-semibold">BTC</h5>
                        <img className="rotate-90 w-5 h-5" src="/img/arrow-right.svg" alt="arrow"/>
                    </div>
                </div>
            </div>

            <button
                className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Exchange
            </button>
        </div>
    )
}