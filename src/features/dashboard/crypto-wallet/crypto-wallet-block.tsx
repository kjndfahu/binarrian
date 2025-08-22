export function CryptoWalletBlock({value, symbol, data, logo, number, isPositive, img}: {
    value: string,
    symbol: string,
    data: number,
    logo: string,
    number: number,
    isPositive: boolean,
    img: string
}) {
    return (
        <div
            className="relative rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div
                className="flex relative bg-[#070322] rounded-[12px] justify-between h-[221px] p-[22px] md:w-full w-[300px]">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4">
                        <img className="w-[24px] h-[24px]" src={logo} alt="btc"/>
                        <p className="text-[18px] text-white leading-[27px]">{symbol}</p>
                    </div>
                    <h3 className="text-[25px] mt-2 text-white font-semibold leading-[27px]">{number}</h3>
                    <p className="text-[16px] leading-[24px] text-[#A5ADCF]">{value}</p>
                </div>
                <p className={`text-[18px] leading-[27px] ${isPositive ? 'text-[#11CABE]' : 'text-[#FA2256]'} font-semibold`}>{data}%</p>
                <img className="absolute bottom-[20px]" src={img} alt="btc"/>
            </div>

        </div>

    )
}