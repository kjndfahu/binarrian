export function WithdrawBlock({title, info, isBlock}:{title:string, info:string, isBlock:boolean}){
    return (
        <div
            className="relative rounded-[10px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div className="flex flex-col rounded-[8px] gap-2 bg-[#070322] items-start px-[16px] py-[11px]">
                <div className="flex items-center gap-3">
                    <p className="text-[8px] leading-[12px] font-bold text-[#CACACA]">{title}</p>
                    <img src="/img/info-block.svg" alt="block"/>
                </div>
                <h5 className="font-semibold text-white text-[11px] leading-[19px]">{info}</h5>
            </div>
        </div>

    )
}