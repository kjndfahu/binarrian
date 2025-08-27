import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const settings = {
    width: 94,
    height: 94,
    value: 60,
    innerRadius: 27,
};

export function DefaultForm({setForm}:{setForm:(arg: string)=>void}){
    return (
        <div className="flex flex-col justify-between h-full p-6 rounded-[12px] bg-[#070322]">
            <div className="flex items-center gap-4">
                <img src="/img/eth-icon.svg" alt="icon"/>
                <h4 className="text-white text-[20px] leading-[27px] font-semibold">ETH</h4>
            </div>
            <div className="flex flex-col gap-2">
                <p className="text-[#CACACA] text-[16px] leading-6">Total Balance</p>
                <h3 className="text-[25px] leading-[27px] text-white font-semibold">0.2133214214</h3>
                <h5 className="text-[18px] leading-[27px] text-[#CACACA]">3,230.98 USD</h5>
            </div>
            <div className="flex flex-col gap-3">
                <div
                    className="flex items-center justify-between rounded-[12px] py-2 px-4 indice-bg border-[1px] border-[#D0DCFF8F]">
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[16px] leading-6 text-[#CACACA]">Exchange Balance</h5>
                        <div className="flex flex-col">
                            <h4 className="text-[18px] leading-[27px] text-white font-semibold">0.213435345</h4>
                            <h5 className="text-[16px] leading-[24px] text-[#11CABE]">3,897.98 USD</h5>
                        </div>
                    </div>
                    <Gauge
                        {...settings}
                        cornerRadius="50%"
                        sx={() => ({
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 12,
                                color: '#FFFFFF',
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#C963FF',
                                strokeWidth: 10,
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                                fill: '#34384C',
                                strokeWidth: 10,
                            },
                        })}
                    />
                </div>

                <div
                    className="flex items-center justify-between rounded-[12px] py-2 px-4 indice-bg border-[1px] border-[#D0DCFF8F]">
                    <div className="flex flex-col gap-2">
                        <h5 className="text-[16px] leading-6 text-[#CACACA]">Assets Balance</h5>
                        <div className="flex flex-col">
                            <h4 className="text-[18px] leading-[27px] text-white font-semibold">0.213435345</h4>
                            <h5 className="text-[16px] leading-[24px] text-[#11CABE]">3,897.98 USD</h5>
                        </div>
                    </div>
                    <Gauge
                        {...settings}
                        cornerRadius="50%"
                        sx={() => ({
                            [`& .${gaugeClasses.valueText}`]: {
                                fontSize: 12,
                                color: '#FFFFFF',
                            },
                            [`& .${gaugeClasses.valueArc}`]: {
                                fill: '#30E0A1',
                                strokeWidth: 10,
                            },
                            [`& .${gaugeClasses.referenceArc}`]: {
                                fill: '#34384C',
                                strokeWidth: 10,
                            },
                        })}
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setForm('withdraw')}
                    className="text-[14px] w-full h-[47px] mt-[4px] font-semibold cursor-pointer rounded-full text-white py-3 px-[18px] visit-btn">
                    Withdraw
                </button>
                <button
                    onClick={() => setForm('deposit')}
                    className="text-[14px] w-full h-[47px] mt-[4px] border-[1px] border-white font-semibold cursor-pointer rounded-full text-white py-3 px-[18px]">
                    Deposit
                </button>
            </div>
        </div>
    )
}