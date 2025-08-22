export function SwapSection(){
    return (
        <div
            style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
            className="relative rounded-[14px] lg:w-[300px] w-full border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <div
                className="flex flex-col bg-[#070322] w-full rounded-[12px] gap-6 p-6 ">
                <h4 className="text-[18px] text-white font-medium leading-6">Swap coin</h4>

                <div className="flex flex-col gap-[9px]">
                    <p className="text-[14px] leading-[22px] text-[#5D6588]">From</p>
                    <div
                        className="flex w-full pr-6 gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                        <input placeholder="0.05"
                               className=" text-[17px] w-full outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                               type="number"/>
                        <div className="flex items-center cursor-pointer text-white gap-[7px]">
                            <img src="/img/eth-icon.svg" alt="icon"/>
                            <h5 className="text-[16px] leading-[27px] font-semibold">0.1</h5>
                            <h5 className="text-[16px] leading-[27px] font-semibold">ETH</h5>
                            <img className="rotate-90" src="/img/arrow-right.svg" alt="icon"/>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[9px]">
                    <p className="text-[14px] leading-[22px] text-[#5D6588]">To</p>
                    <div
                        className="flex w-full pr-6 gap-[15px] border-b-[1px] border-[#34384C] py-[14px] items-center justify-between">
                        <input placeholder="0.05"
                               className=" text-[17px] w-full outline-0 ring-0 placeholder:text-white text-white leading-[25px]"
                               type="number"/>
                        <div className="flex items-center cursor-pointer text-white gap-[7px]">
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
        </div>

    )
}