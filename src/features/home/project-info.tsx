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
        <div className="flex flex-col md:flex-row md:gap-0 sm:gap-8 gap-6 z-[1] faq-bg mt-[350px] w-full backdrop-blur-3xl py-[44px] 2xl:px-[105px] lg:px-[70px] px-5 items-center justify-between">
            {projectInfo.map((item, index) => (
                <div key={index} className="flex flex-col items-center capitalize gap-[10px]">
                    <h3 className="2xl:text-[64px] lg:text-[55px] md:text-[52px] text-[48px] font-bold project-info-text">{item.number}</h3>
                    <p className="text-[20px] text-[#C7C7C7] font-normal">{item.text}</p>
                </div>
            ))}
        </div>
    )
}