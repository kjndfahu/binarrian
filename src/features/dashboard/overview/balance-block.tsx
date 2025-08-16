import {IncomeExpress} from "@/features/dashboard/overview/income-express.tsx";
import {WalletSection} from "@/features/dashboard/overview/wallet-section.tsx";

export function BalanceBlock() {
    return (
        <div className="flex flex-col gap-4 p-6 rounded-[12px] border-[1px] border-[#D0DCFF8F] w-[408px]">
            <div className="flex items-center justify-between">
                <h3 className="text-[20px] font-bold text-white leading-[24px]">Balance</h3>
                <div className="flex items-center gap-2">
                    <img src="/img/green-arrow.svg" alt="green-arrow"/>
                    <p className="text-[18px] leading-[27px] font-semibold text-[#11CABE]">0.53%</p>
                </div>
            </div>
            <h2 className="text-[39px] text-white font-semibold leading-[50px]">USD 12.243,55</h2>
            <IncomeExpress/>
            <WalletSection/>
        </div>
    )
}