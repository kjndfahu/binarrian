export function Text({title, text}: {title: string, text: string}) {
    return (
        <div className="flex flex-col sm:items-start items-center lg:gap-[35px] sm:gap-[28px] gap-[24px]">
            <h3 className="lg:text-[32px] sm:text-[28px] sm:text-left text-center text-[24px] uppercase font-bold about-text">{title}</h3>
            <div className="sm:pl-10 lg:text-[20px] sm:text-[18px] text-[16px] lg:leading-[40px] sm:leading-[36px] leading-[32px] text-[#CACACA]">
                {text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </div>
    )
}