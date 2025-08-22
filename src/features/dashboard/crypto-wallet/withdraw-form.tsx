import {WithdrawBlock} from "@/features/dashboard/crypto-wallet/withdraw-block.tsx";
import {BalanceBlock} from "@/features/dashboard/crypto-wallet/balance-block.tsx";

export function WithdrawForm({setForm}:{setForm:(arg: string)=>void}){
    return (
        <div className="flex flex-col h-full p-6 gap-5 rounded-[12px] bg-[#070322]">
            <div className="flex items-center gap-4">
                <img onClick={() => setForm('default')} className="cursor-pointer" src="/img/arrow-gray.svg" alt="arrow-gray"/>
                <img className="w-8 h-8" src="/img/eth-icon.svg" alt="icon"/>
                <div className="flex flex-col font-medium gap-1">
                    <h4 className="text-white text-[18px] leading-[24px]">Withdraw ETH</h4>
                    <p className="text-[13px] leading-[16px] text-[#CACACA]">Ethereum</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <BalanceBlock/>
                <WithdrawBlock title="ADDRESS" info="JH74KJSDC93KXXU73UU01" isBlock={true}/>
                <WithdrawBlock title="AMOUNT TO WITHDRAW" info="0.5" isBlock={true}/>
                <WithdrawBlock title="TRANSACTION FEE" info="-0.01164708 ETH" isBlock={true}/>
                <WithdrawBlock title="TOTAL" info="0.496568333 ETH" isBlock={false}/>
            </div>
            <button
                className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                Withdraw
            </button>
        </div>
    )
}
