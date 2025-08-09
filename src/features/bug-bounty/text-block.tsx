export function TextBlock({title, text}:{title?: string, text: string}) {
    return (
        <div className="flex flex-col items-center gap-12">
            <h2 className="font-bold w-[1200px] text-center uppercase about-text leading-11 text-[47px]">{title}</h2>
            <p className="text-[#CACACA] leading-[44px] text-[20px]">{text}</p>
        </div>
    )
}