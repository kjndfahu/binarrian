import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import {CurrencyBlock} from "@/features/dashboard/overview/currency-block.tsx";

const data = [
    {
        name: 'BTC',
        value: 45,
        color: '#F7931A',
        glowColor: '#F7931A'
    },
    {
        name: 'ETH',
        value: 30,
        color: '#627EEA',
        glowColor: '#627EEA'
    },
    {
        name: 'USDT',
        value: 25,
        color: '#26A17B',
        glowColor: '#26A17B'
    },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <></>
    );
};

const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="">
            </div>
        );
    }
    return null;
};

export function WalletSection(){
    return (
        <div className="flex flex-col lg:mt-0 mt-6 gap-8 ">
            <div className="flex items-center justify-between">
                <h5 className="text-[20px] text-white leading-[24px] font-bold">Wallet</h5>
                <p className="text-[16px] leading-[24px] text-[#CACACA]">3 Currencies</p>
            </div>

            <div className="flex lg:flex-row flex-col gap-5">
                <div className="lg:self-start self-center lg:w-[163px] w-[233px] lg:h-[163px] h-[233px]  outline-0 ring-0 select-none relative" style={{outline: 'none'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={65}
                                outerRadius={78}
                                paddingAngle={5}
                                cornerRadius={3}
                                dataKey="value"
                                label={renderCustomizedLabel}
                                labelLine={false}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={entry.color}
                                        stroke={entry.color}
                                        strokeWidth={2}
                                    />
                                ))}
                            </Pie>
                            <Tooltip content={<CustomTooltip />} />
                        </PieChart>
                    </ResponsiveContainer>

                    <div className="absolute p-[3px] inset-0 lg:left-[25px] left-[33px] lg:top-[25px] top-[33px] lg:tooltip-bg-balance rounded-full lg:w-[113px] w-[167px] lg:h-[113px] h-[167px] flex items-center justify-center pointer-events-none">
                        <div className="flex aspect-square border-[2px] border-dashed w-full border-[#8144F6] rounded-full gap-1 items-center justify-center text-center">
                            <img className="rotate-180" src="/img/arrow-green-down.svg" alt="arrow"/>
                            <p className="text-white font-semibold text-[20px] leading-[27px]">2.31%</p>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col gap-2">
                    <CurrencyBlock/>
                    <CurrencyBlock/>
                    <CurrencyBlock/>
                </div>
            </div>
        </div>
    )
}