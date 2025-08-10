export function SwapSection(){
    return (
        <div className="flex flex-col w-[300px] rounded-[12px] border-[1px] border-[#D0DCFF8F] gap-6 p-6 buy-crypto-bg">
            <h4 className="text-[18px] text-white font-medium leading-6">Swap coin</h4>

            <div className="flex flex-col gap-[9px]">
                <p className="text-[14px] leading-[22px] text-[#5D6588]">From</p>
                <div className="flex w-full gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                    <input placeholder="0.05" className=" text-[17px] outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                           type="number"/>
                    <div className="flex items-center text-white gap-[7px]">
                        <img src="/img/eth-icon.svg" alt="icon"/>
                        <h5 className="text-[16px] leading-[27px] font-semibold">0.1</h5>
                        <h5 className="text-[16px] leading-[27px] font-semibold">ETH</h5>
                        <img className="rotate-90" src="/img/arrow-right.svg" alt="icon"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[9px]">
                <p className="text-[14px] leading-[22px] text-[#5D6588]">To</p>
                <div className="flex w-full gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                    <input placeholder="0.05" className=" text-[17px] outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                           type="number"/>
                    <div className="flex items-center text-white gap-[7px]">
                        <img src="/img/btc-icon.svg" alt="icon"/>
                        <h5 className="text-[16px] leading-[27px] font-semibold">0.1</h5>
                        <h5 className="text-[16px] leading-[27px] font-semibold">BTC</h5>
                        <img className="rotate-90" src="/img/arrow-right.svg" alt="icon"/>
                    </div>
                </div>
            </div>

            <button
                className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Swap
            </button>
        </div>
    )
}