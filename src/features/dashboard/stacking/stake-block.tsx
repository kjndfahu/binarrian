import {StakeInputBlock} from "@/features/dashboard/stacking/stake-input-block.tsx";
import {TimeBlock} from "@/features/dashboard/stacking/time-block.tsx";

export function StakeBlock(){
    return (
        <div
            className="relative lg:w-[300px] w-full h-[564px] rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div
                className="flex flex-col h-full gap-[12px] bg-[#070322] lg:w-[300px] w-full p-6 rounded-[12px]">
                <div className="flex items-center gap-4">
                    <img src="/img/eth-icon.svg" className="w-8 h-8" alt="btc"/>
                    <div className="flex flex-col gap-1">
                        <h5 className="text-[18px] font-medium text-white leading-[27px]">ETH STAKE</h5>
                        <p className="text-[13px] font-medium text-[#CACACA] leading-[16px]">Ethereum</p>
                    </div>
                </div>
                <div className="flex flex-col pt-5 gap-6">
                    <StakeInputBlock firstText="Input" firstLogo="/img/input-logo.svg" secText="Balance"
                                     secLogo="/img/card.svg"/>
                    <StakeInputBlock firstText="Sent" firstLogo="/img/input-logo.svg" secText="Received"
                                     secLogo="/img/card-receive.svg"/>
                </div>
                <TimeBlock/>
                <button
                    className="text-[14px] mt-[16px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                    Stake
                </button>
            </div>
        </div>

    )
}