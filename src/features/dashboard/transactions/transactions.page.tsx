"use client"

import {useState} from "react";

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
        <div style={{ maxHeight: 'calc(100% - 161px)' }} className="flex flex-col relative h-full mx-9 buy-crypto-bg rounded-[12px] border-[1px] border-[#D0DCFF8F]">
            <div className="flex items-center justify-between pt-4 px-[26px] flex-shrink-0">
                <h3 className="text-[20px] text-white leading-[24px] font-bold">History Transactions</h3>
                <div className="flex gap-4 items-center">
                    <div onClick={() => setTab('all')} className={`text-[16px] ${tab === 'all' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>All</div>
                    <div onClick={() => setTab('withdraw')} className={`text-[16px] ${tab === 'withdraw' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Withdraw</div>
                    <div onClick={() => setTab('deposit')} className={`text-[16px] ${tab === 'deposit' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Deposit</div>
                </div>
            </div>
            
            {/* Transactions Table with Scroll */}
            <div className="flex flex-col px-[26px] pt-6 flex-1 overflow-hidden">
                {/* Table Headers */}
                <div className="flex items-center py-4 border-b border-white/10 flex-shrink-0">
                    <div className="flex-1">
                        <span className="text-[16px] text-[#CACACA] tracking-wide">Type</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-[16px] text-[#CACACA] tracking-wide">Date</span>
                    </div>
                    <div className="flex-1">
                        <span className="text-[16px] text-[#CACACA] tracking-wide">Amount</span>
                    </div>
                    <div className="flex-1 text-right">
                        <span className="text-[16px] text-right text-[#CACACA] tracking-wide">Address / Transaction ID</span>
                    </div>
                </div>
                
                {/* Scrollable Table Body */}
                <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100% - 120px)', marginRight: '-20px', paddingRight: '20px' }}>
                    {transactions.map((transaction, index) => (
                        <div key={index} className="flex items-center py-4 border-b border-white/5">
                            <div className="flex-1 flex items-center gap-3">
                                <img src="/img/btc-icon.svg" alt="btc"/>
                                <span className="text-[16px] font-semibold text-white">{transaction.type}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] text-white font-normal">{transaction.date}</span>
                            </div>
                            <div className="flex-1">
                                <span className="text-[16px] text-white">{transaction.amount}</span>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col gap-1 text-right">
                                    <span className="text-[16px] text-white font-normal">{transaction.address}</span>
                                    <span className="text-[16px] text-white font-normal">{transaction.txId}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="absolute bottom-0 w-full h-[69px] bg-gradient-to-t from-white/10 via-white/10 to-transparent rounded-b-[12px]"></div>
        </div>
    )
}

export default TransactionsPage;