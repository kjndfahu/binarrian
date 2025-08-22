import {BalanceBlock} from "@/features/dashboard/crypto-wallet/balance-block.tsx";
import {WithdrawBlock} from "@/features/dashboard/crypto-wallet/withdraw-block.tsx";
import {DepositAddressBlock} from "@/features/dashboard/crypto-wallet/deposit-address-block.tsx";

export function DepositForm({setForm}:{setForm:(arg: string)=>void}){
    return (
        <div className="flex flex-col h-full p-6 gap-5 rounded-[12px] bg-[#070322]">
            <div className="flex items-center gap-4">
                <img onClick={() => setForm('default')} className="cursor-pointer" src="/img/arrow-gray.svg"
                     alt="arrow-gray"/>
                <img className="w-8 h-8" src="/img/eth-icon.svg" alt="icon"/>
                <div className="flex flex-col font-medium gap-1">
                    <h4 className="text-white text-[18px] leading-[24px]">Deposit ETH</h4>
                    <p className="text-[13px] leading-[16px] text-[#CACACA]">Ethereum</p>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <BalanceBlock/>
                <DepositAddressBlock/>
            </div>
            <button
                className="text-[14px] w-full h-[47px] border-[1px] border-white font-semibold cursor-pointer rounded-full text-white py-3 px-[18px]">
                Deposit
            </button>
        </div>
    )
}