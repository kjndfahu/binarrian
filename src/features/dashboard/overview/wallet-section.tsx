import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// Данные для диаграммы с эффектами свечения
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

export function WalletSection(){
    return (
        <div className="flex flex-col gap-8 mt-[14px]">
            <div className="flex items-center justify-between">
                <h5 className="text-[20px] text-white leading-[24px] font-bold">Wallet</h5>
                <p className="text-[16px] leading-[24px] text-[#CACACA]">3 Currencies</p>
            </div>
            
            <div className="w-full h-[300px] select-none" style={{ outline: 'none' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <defs>
                            {data.map((entry, index) => (
                                <filter key={`glow-${index}`} id={`glow-${index}`}>
                                    <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                                    <feFlood floodColor={entry.glowColor} floodOpacity="0.8" result="glowColor"/>
                                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow"/>
                                    <feMerge>
                                        <feMergeNode in="softGlow"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            ))}
                        </defs>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={80}
                            outerRadius={97}
                            paddingAngle={5}
                            cornerRadius={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={entry.color}
                                    filter={`url(#glow-${index})`}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}