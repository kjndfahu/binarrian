import {useState} from "react";
import {MarketTab} from "@/features/dashboard/market/market-tab.tsx";

export function MarketTable(){
    const [tab, setTab] = useState('all')

    const trendAssets = [
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },{
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
        {
            name: "Bitcoin",
            icon: "/img/btc-icon.svg",
            symbol: "BTC",
            price: "USD 53,260.20",
            marketCap: "USD 53,260.20",
            change: "0.25%",
            isPositive: true,
            chartData: "/img/btc-chart.png"
        },
    ];

    return (
        <div
            style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
            className="relative rounded-[14px] overflow-y-auto overflow-x-auto lg:overflow-x-hidden border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <div className="flex flex-col h-full bg-[#070322] items-center justify-center gap-6">
                <div
                    className="w-full rounded-[20px] px-[30px] backdrop-blur-lg overflow-y-hidden overflow-x-hidden">
                    <div className="flex items-center justify-between pt-6 flex-shrink-0">
                        <h3 className="text-[20px] text-white leading-[24px] font-bold">Market Assets</h3>
                        <div className="md:flex hidden gap-4 items-center">
                            <div onClick={() => setTab('all')}
                                 className={`text-[16px] ${tab === 'all' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>All
                                Assets
                            </div>
                            <div onClick={() => setTab('gainers')}
                                 className={`text-[16px] ${tab === 'gainers' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'} cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Gainers
                            </div>
                            <div onClick={() => setTab('losers')}
                                 className={`text-[16px] ${tab === 'losers' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Losers
                            </div>
                            <div onClick={() => setTab('tradeble')}
                                 className={`text-[16px] ${tab === 'tradeble' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  cursor-pointer rounded-full leading-[25px] font-semibold px-4 py-2`}>Tradeble
                            </div>
                        </div>
                        <MarketTab/>
                    </div>
                    <div className="flex items-center mt-6 justify-between 2xl:px-8 px-4 py-6 border-b border-[#D0DCFF2F]">
                        <div className="flex items-center gap-4 2xl:w-[300px] w-[230px]">
                            <span className="text-[16px] leading-6 text-[#CACACA]">Assets</span>
                        </div>
                        <div className="flex-1 ">
                            <span className="text-[16px] leading-6 text-white">Last Price</span>
                        </div>
                        <div className="flex-1 ">
                            <span className="text-[16px] leading-6 text-white">Market Cap</span>
                        </div>
                        <div className="w-[100px]">
                            <span className="text-[16px] leading-6 text-[#CACACA]">Change</span>
                        </div>
                        <div className="w-[220px]">
                            <span className="text-[16px] leading-6 text-[#CACACA]">Chart</span>
                        </div>
                        <div className="w-[100px]">
                            <span className="text-[16px] leading-6 text-[#CACACA]">Trade</span>
                        </div>
                    </div>

                    <div className="flex-1 h-full overflow-y-hidden">
                        {trendAssets.map((asset, index) => (
                            <div key={index}
                                 className="flex items-center justify-between 2xl:px-8 px-4 py-6 border-b border-[#D0DCFF1F] hover:bg-[#FFFFFF05] transition-colors">
                                <div className="flex items-center gap-4 2xl:w-[300px] w-[230px]">
                                    <img className="w-[29px] h-[29px] pointer-events-none select-none" src={asset.icon}
                                         alt="logo"/>
                                    <div className="flex items-center gap-10">
                                        <span
                                            className="text-[16px] leading-6 font-semibold text-white">{asset.symbol}</span>
                                        <span className="text-[16px] leading-6 text-[#B9BDEA]">{asset.name}</span>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <span className="text-[16px] leading-6 text-white">{asset.price}</span>
                                </div>
                                <div className="flex-1">
                                    <span className="text-[16px] leading-6 text-white">{asset.marketCap}</span>
                                </div>
                                <div className="w-[100px]">
                            <span
                                className={`text-[16px] leading-6 ${asset.isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'}`}>
                                {asset.change}
                            </span>
                                </div>
                                <div className="w-[220px]">
                                    <img className="flex-1 pointer-events-none select-none" src={asset.chartData}
                                         alt="chart"/>
                                </div>
                                <div className="w-[100px]">
                                    <button
                                        className="w-[74px] h-[57px] cursor-pointer text-white font-bold text-[14px] leading-[22px] hover:bg-gradient-to-r hover:from-[#B189FF] hover:to-[#8144F6] rounded-full border-[1px] border-[#6C24F5] transition-all duration-300">Buy
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}