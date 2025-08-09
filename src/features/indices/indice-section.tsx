export function IndiceSection({title, text}:{title:string, text:string}){
    return(
        <div className="flex flex-col items-center gap-12">
            <h2 className="font-bold uppercase about-text text-[47px]">{title}</h2>
            <div className="rounded-[20px] border-[1px] indice-bg text-[20px] text-[#CACACA] leading-[40px] border-[#D0DCFF8F] p-10">
                  {text}
            </div>
        </div>
    )
}