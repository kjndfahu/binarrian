export function IndiceSection({title, text}:{title?:string, text:string}){
    return(
        <div className="flex flex-col items-center gap-12">
            <h2 className="font-bold text-center uppercase about-text 2xl:text-[47px] 2xl:leading-[44px] xl:text-[42px] xl:leading-[41px] lg:text-[36px] lg:text-[38px] sm:text-[35px] text-[32px] leading-[33px]">{title}</h2>
            <div className="rounded-[20px] w-full border-[1px] indice-bg text-[20px] text-[#CACACA] leading-[40px] border-[#D0DCFF8F] md:p-10 p-8">
                {text.split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))}
            </div>
        </div>
    )
}