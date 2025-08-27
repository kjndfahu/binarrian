"use client"

import { useState } from "react";
import { TransactionsBarAdaptive } from "@/features/dashboard/transactions/transactions-bar-adaptive.tsx";

const transactions = [
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
];

export function HistorySwap() {
    const [tab, setTab] = useState('all');

    return (
        <div
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
            className="relative rounded-[14px] overflow-x-auto lg:overflow-x-hidden border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <div className="flex flex-col relative min-w-fit bg-[#070322] h-full rounded-[12px]">
                <div className="flex items-center justify-between pt-6 md:px-[26px] px-[17px] flex-shrink-0">
                    <h3 className="md:text-[20px] text-[18px] text-white leading-[24px] font-bold">History Swap</h3>
                    <div className="md:flex hidden gap-4 items-center">
                        <div
                            onClick={() => setTab('all')}
                            className={`text-[16px] ${tab === 'all' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            All
                        </div>
                        <div
                            onClick={() => setTab('withdraw')}
                            className={`text-[16px] ${tab === 'withdraw' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            Withdraw
                        </div>
                        <div
                            onClick={() => setTab('deposit')}
                            className={`text-[16px] ${tab === 'deposit' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}
                        >
                            Deposit
                        </div>
                    </div>
                    <TransactionsBarAdaptive />
                </div>

                <div className="flex flex-col px-[26px] pt-6 flex-1 min-h-0 lg:min-w-[800px] min-w-[500px] lg:min-w-0">

                    <div
                        style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
                        className="flex-1 pr-[20px] overflow-y-auto min-h-0 md:scrollbar-left"
                    >
                        {transactions.map((transaction, index) => (
                            <div key={index} className="flex items-center py-4 border-b border-white/5 md:direction-ltr">
                                <div className=" min-w-0 xl:w-[120px] w-[70px]">
                                    <span className="lg:text-[16px] text-[14px] text-white font-normal truncate">From</span>
                                </div>
                                <div className="lg:flex-1 min-w-0 2xl:w-[300px] xl:w-[200px] lg:w-[170px] w-[100px] flex items-center gap-3">
                                    <img src={transaction.fromIcon} alt={transaction.fromSymbol} className="w-6 h-6 flex-shrink-0" />
                                    <span className="lg:text-[16px] text-[14px] font-semibold text-white truncate">{transaction.fromSymbol}</span>
                                    <span className="lg:flex hidden lg:text-[16px] text-[14px] text-white font-normal truncate">{transaction.fromName}</span>
                                </div>
                                <div className="lg:flex-1 text-center min-w-0 xl:w-[90px] w-[70px]">
                                    <span className="lg:text-[16px] text-[14px] text-white font-normal truncate">To</span>
                                </div>
                                <div className="lg:flex-1 min-w-0 2xl:w-[300px] xl:w-[200px] lg:w-[170px] w-[100px] flex items-center gap-3">
                                    <img src={transaction.toIcon} alt={transaction.toSymbol} className="w-6 h-6 flex-shrink-0" />
                                    <span className="lg:text-[16px] text-[14px] font-semibold text-white truncate">{transaction.toSymbol}</span>
                                    <span className="lg:flex hidden lg:text-[16px] text-[14px] text-white font-normal truncate">{transaction.toName}</span>
                                </div>
                                <div className="flex-1 min-w-0 text-right">
                                    <span className="lg:text-[16px] text-[14px] text-[#11CABE] font-normal truncate">{transaction.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}