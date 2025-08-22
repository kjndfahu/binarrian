export function MarketBlock({title, value, name, symbol, data, logo}:{title:string, value:string, name:string, symbol:string, data:number, logo: string}){
    return (
        <div
            style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
            className="relative rounded-[14px] md:w-full w-[300px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]"
        >
            <div
                className="flex flex-col h-[149px] relative md:w-full w-[300px] gap-2 bg-[#070322] rounded-[12px] p-4">
                <p className="text-[16px] text-[#CACACA] leading-6">{title}</p>
                <div className="flex w-full items-start justify-between">
                    <div className="flex gap-4">
                        <img className="w-[32px] h-[32px]" src={logo} alt="btc"/>
                        <div className="flex flex-col gap-1">
                            <h3 className="text-[20px] text-white font-semibold leading-[27px]">{value}</h3>
                            <h5 className="text-[16px] leading-[24px] text-[#E5E6ED]">{name}</h5>
                            <p className="text-[16px] leading-[24px] text-[#CACACA]">{symbol}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="/img/green-arrow.svg" alt="arrow"/>
                        <p className="text-[16px] leading-6 text-[#11CABE]">{data}%</p>
                    </div>
                </div>
                <img className="absolute right-[16px] bottom-[16px] w-[96px] h-[28px]" src="/img/btc-chart.png"
                     alt="chart"/>
            </div>
        </div>

    )
}