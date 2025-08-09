export function Text({title, text}: {title: string, text: string}) {
    return (
        <div className="flex flex-col gap-[30px]">
            <h3 className="text-[32px] uppercase font-bold about-text">{title}</h3>
            <p className="pl-10 text-[20px] leading-[40px] text-[#CACACA]">{text}</p>
        </div>
    )
}