export function BalanceBlock(){
    return (
        <div
            className="relative rounded-[10px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div className="flex flex-col rounded-[8px] gap-2 balance-withdraw items-start px-[16px] py-[11px]">
                <p className="text-[8px] leading-[12px] font-bold text-[#CACACA]">BALANCE</p>
                <div className="flex items-center w-full justify-between">
                    <h5 className="font-semibold text-white text-[11px] leading-[19px]">0.12366588 ETH</h5>
                    <p className="font-medium text-[#11CABE] text-[11px] leading-[22px]">$10,224.546 USD</p>
                </div>
            </div>
        </div>
    )
}