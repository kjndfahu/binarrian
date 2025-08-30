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
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
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
            className="relative max-h-[643px] rounded-[14px] overflow-x-auto lg:overflow-x-hidden border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <style jsx>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                    height: 8px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #D0DCFF8F;
                    border-radius: 4px;
                }
            `}</style>
            <div className="flex flex-col relative min-w-fit bg-[#070322] h-full rounded-[12px]">
                <div className="flex items-center justify-between pt-6 md:px-[26px] px-[17px] flex-shrink-0">
                    <h3 className="md:text-[20px] text-[18px] text-white leading-[24px] font-bold">History Swap</h3>
                    <div className="lg:flex hidden gap-4 items-center">
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

                <div className="flex flex-col lg:px-[26px] lg:pt-6 pt-2 flex-1 min-h-0 xl:min-w-[800px] min-w-[500px] lg:min-w-0">
                    <div
                        style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
                        className="flex-1 overflow-y-auto min-h-0 custom-scroll [direction:rtl] lg:[direction:ltr]"
                    >
                        <div className="[direction:ltr] lg:pl-0 pl-3 xl:pr-[20px] pr-[20px] lg:pr-0">
                            {transactions.map((transaction, index) => (
                                <div key={index} className="flex items-center py-4 border-b border-white/5">
                                    <div className="min-w-0 xl:w-[120px] w-[50px]">
                                        <span className="lg:text-[16px] text-[14px] text-white font-normal truncate">From</span>
                                    </div>
                                    <div className="xl:flex-1 min-w-0 2xl:w-[300px] xl:w-[160px] lg:w-[140px] w-[100px] flex items-center gap-3">
                                        <img src={transaction.fromIcon} alt={transaction.fromSymbol} className="w-6 h-6 flex-shrink-0" />
                                        <span className="xl:text-[16px] text-[14px] font-semibold text-white truncate">{transaction.fromSymbol}</span>
                                        <span className="lg:flex hidden xl:text-[16px] text-[14px] text-white font-normal truncate">{transaction.fromName}</span>
                                    </div>
                                    <div className="xl:flex-1 text-center xl:w-[90px] w-[50px]">
                                        <span className="xl:text-[16px] text-[14px] text-white font-normal truncate">To</span>
                                    </div>
                                    <div className="xl:flex-1 min-w-0 2xl:w-[300px] xl:w-[200px] lg:w-[170px] w-[100px] flex items-center gap-3">
                                        <img src={transaction.toIcon} alt={transaction.toSymbol} className="w-6 h-6 flex-shrink-0" />
                                        <span className="xl:text-[16px] text-[14px] font-semibold text-white truncate">{transaction.toSymbol}</span>
                                        <span className="lg:flex hidden xl:text-[16px] text-[14px] text-white font-normal truncate">{transaction.toName}</span>
                                    </div>
                                    <div className="xl:flex-1 w-[100px] min-w-0 text-right">
                                        <span className="xl:text-[16px] text-[14px] text-[#11CABE] font-normal truncate">{transaction.status}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}