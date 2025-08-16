export function WalletSection(){
    return (
        <div
            className="relative w-[24%] h-full rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div className="flex flex-col h-full p-6 gap-4 rounded-[12px] bg-[#070322]">
                <div className="flex items-center gap-4">
                    <img src="/img/eth-icon.svg" alt="icon"/>
                    <h4 className="text-white text-[20px] leading-[27px] font-semibold">ETH</h4>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-[#CACACA] text-[16px] leading-6">Total Balance</p>
                    <h3 className="text-[25px] leading-[27px] text-white font-semibold">0.2133214214</h3>
                    <h5 className="text-[18px] leading-[27px] text-[#CACACA]">3,230.98 USD</h5>
                </div>
                <div className="flex flex-col mt-4 gap-6">
                    <div
                        className="flex items-center justify-between rounded-[12px] py-2 px-4 indice-bg border-[1px] border-[#D0DCFF8F]">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[16px] leading-6 text-[#CACACA]">Exchange Balance</h5>
                            <div className="flex flex-col">
                                <h4 className="text-[18px] leading-[27px] text-white font-semibold">0.213435345</h4>
                                <h5 className="text-[16px] leading-[24px] text-[#11CABE]">3,897.98 USD</h5>
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-between rounded-[12px] py-2 px-4 indice-bg border-[1px] border-[#D0DCFF8F]">
                        <div className="flex flex-col gap-2">
                            <h5 className="text-[16px] leading-6 text-[#CACACA]">Assets Balance</h5>
                            <div className="flex flex-col">
                                <h4 className="text-[18px] leading-[27px] text-white font-semibold">0.213435345</h4>
                                <h5 className="text-[16px] leading-[24px] text-[#11CABE]">3,897.98 USD</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                        Withdraw
                    </button>
                    <button
                        className="text-[14px] w-full h-[47px] mt-[4px] border-[1px] border-white font-semibold cursor-pointer rounded-full text-white py-3 px-[18px]">
                        Deposit
                    </button>
                </div>
            </div>
        </div>
    )
}