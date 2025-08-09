const projectInfo = [
    {
        number: '20',
        text: 'Years Experience'
    },
    {
        number: '50+',
        text: 'Countries'
    },
    {
        number: '200K+',
        text: 'Traders'
    },
    {
        number: '150+',
        text: 'Trading Pairs'
    },
]

export function ProjectInfo(){
    return (
        <div className="flex z-[1] mt-[350px] w-full backdrop-blur-3xl py-[44px] px-[105px] items-center justify-between">
            {projectInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center capitalize gap-[10px]">
                    <h3 className="text-[64px] font-bold project-info-text">{item.number}</h3>
                    <p className="text-[20px] text-[#C7C7C7] font-normal">{item.text}</p>
                </div>
            ))}
        </div>
    )
}