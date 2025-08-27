"use client"

import {useState} from "react";
import {TransactionsBarAdaptive} from "@/features/dashboard/transactions/transactions-bar-adaptive.tsx";

const transactions = [
    {
        type: "Withdraw BTC",
        icon: "orange",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Deposit ETH",
        icon: "purple",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Withdraw BTC",
        icon: "orange",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Deposit ETH",
        icon: "purple",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Withdraw BTC",
        icon: "orange",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Deposit ETH",
        icon: "purple",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Withdraw BTC",
        icon: "orange",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Deposit ETH",
        icon: "purple",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Withdraw BTC",
        icon: "orange",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    },
    {
        type: "Deposit ETH",
        icon: "purple",
        date: "July 25, 2025 10:10:10",
        amount: "USD 3,200.20",
        address: "Zja7BQo782QanKv4so",
        txId: "JHAEIF6374NXY3484748949"
    }
];

export function TransactionsPage() {
    const [tab, setTab] = useState('all')

    return (
        <div
            style={{maxHeight: 'calc(100% - 161px)', scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
            className="relative rounded-[14px] overflow-x-auto lg:overflow-x-hidden lg:mx-8 md:mx-5 mx-4 border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <style jsx>{`
                .custom-scroll::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scroll::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scroll::-webkit-scrollbar-thumb {
                    background: #D0DCFF8F;
                    border-radius: 4px;
                }
            `}</style>
            <div
                className="flex flex-col relative min-w-fit bg-[#070322] h-full rounded-[12px]">
                <div className="flex items-center justify-between pt-6 md:px-[26px] px-[17px] flex-shrink-0">
                    <h3 className="md:text-[20px] text-[18px] text-white leading-[24px] font-bold">History Transactions</h3>
                    <div className="md:flex hidden gap-4 items-center">
                        <div onClick={() => setTab('all')}
                             className={`text-[16px] ${tab === 'all' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>All
                        </div>
                        <div onClick={() => setTab('withdraw')}
                             className={`text-[16px] ${tab === 'withdraw' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Withdraw
                        </div>
                        <div onClick={() => setTab('deposit')}
                             className={`text-[16px] ${tab === 'deposit' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Deposit
                        </div>
                    </div>
                    <TransactionsBarAdaptive/>
                </div>

                <div className="flex flex-col pt-6 flex-1 min-h-0 min-w-[800px] lg:min-w-0">
                    <div className="flex items-center py-4 px-[26px] border-b border-white/10 flex-shrink-0">
                        <div className="flex-1 min-w-0">
                            <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Type</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Date</span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <span className="lg:text-[16px] text-[14px] text-[#CACACA] tracking-wide">Amount</span>
                        </div>
                        <div className="flex-1 min-w-0 text-right">
                            <span className="lg:text-[16px] text-[14px] text-right text-[#CACACA] tracking-wide">Address / Transaction ID</span>
                        </div>
                    </div>

                    <div
                        style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
                        className="flex-1 overflow-y-auto min-h-0 custom-scroll [direction:rtl] md:[direction:ltr] pr-[20px] md:pl-0"
                    >
                        <div className="[direction:ltr] pr-[20px] md:pr-0">
                            {transactions.map((transaction, index) => (
                                <div key={index} className="flex items-center px-[26px] py-4 border-b border-white/5">
                                    <div className="flex-1 flex items-center gap-3 min-w-0">
                                        <img className="w-6 h-6 flex-shrink-0" src="/img/btc-icon.svg" alt="btc"/>
                                        <span className="lg:text-[16px] text-[14px] font-semibold text-white truncate">{transaction.type}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="lg:text-[16px] text-[14px] text-white font-normal truncate">{transaction.date}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <span className="lg:text-[16px] text-[14px] text-white truncate">{transaction.amount}</span>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-col gap-1 text-right">
                                            <span className="lg:text-[16px] text-[14px] text-white font-normal truncate">{transaction.address}</span>
                                            <span className="lg:text-[16px] text-[14px] text-white font-normal truncate">{transaction.txId}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <img className="absolute w-full h-[77px] pointer-events-none select-none bottom-0 rounded-[12px]"
                     src="/img/shadow.png" alt="shadow"/>
            </div>
        </div>
    )
}

export default TransactionsPage;