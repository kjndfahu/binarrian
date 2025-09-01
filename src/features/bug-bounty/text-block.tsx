export function TextBlock({title, text}:{title?: string, text: string}) {
    return (
        <div className="flex flex-col items-center gap-12">
            <h2 className="font-bold xl:w-[1200px] lg:w-[900px] md:w-[650px] sm:w-[470px] w-[320px] text-center uppercase about-text 2xl:text-[47px] 2xl:leading-[44px] xl:text-[42px] xl:leading-[41px] lg:text-[36px] lg:text-[38px] sm:text-[35px] text-[32px] leading-[33px]">{title}</h2>
            <p className="md:text-start text-center text-[#CACACA] leading-[44px] text-[20px]">{text}</p>
        </div>
    )
}