const transactions = [
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
    { fromName: "Bitcoin", fromIcon: "/img/btc-icon.svg", fromSymbol: "BTC", toName: "Ethereum", toIcon: "/img/eth-icon.svg", toSymbol: "ETH", status: "Successfully" },
];

export function HistorySwap() {
    return (
        <div className="flex flex-col w-full p-[22px] rounded-[12px] border-[1px] border-[#D0DCFF8F]">
            <h3 className="text-[25px] text-white pb-[17px] leading-[25px] w-full border-b-[1px] border-[#34384C] font-bold">History swap</h3>
            <div className="flex-1 overflow-y-auto" style={{ maxHeight: 'calc(100% - 120px)', marginRight: '-20px', paddingRight: '20px', scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}>
                {transactions.map((transaction, index) => (
                    <div key={index} className="flex items-center py-4 border-b border-white/5">
                        <h4 className="w-[120px] text-[16px] text-[#A5ADCF] leading-[24px]">From</h4>
                        <div className="w-[300px] flex items-center gap-3">
                            <img src={transaction.fromIcon} alt={transaction.fromSymbol}/>
                            <span className="text-[16px] font-semibold text-white">{transaction.fromSymbol}</span>
                            <span className="text-[16px] text-white font-normal">{transaction.fromName}</span>
                        </div>
                        <h4 className="w-[100px] text-[16px] text-[#A5ADCF] leading-[24px]">To</h4>
                        <div className="w-[300px] flex items-center gap-3">
                            <img src={transaction.toIcon} alt={transaction.toSymbol}/>
                            <span className="text-[16px] font-semibold text-white">{transaction.toSymbol}</span>
                            <span className="text-[16px] text-white font-normal">{transaction.toName}</span>
                        </div>
                        <div className="ml-auto flex items-center justify-end">
                            <span className="text-[16px] text-[#11CABE] font-normal">{transaction.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}