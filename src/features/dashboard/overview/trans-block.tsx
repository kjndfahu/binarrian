export function TransBlock(){
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex items-center rounded-full indice-bg justify-center w-[40px] h-[40px]">
                    <img className="w-[25px] h-[25px] rotate-360" src="/img/arrow-green-down.svg" alt=""/>
                </div>
                <div className="flex flex-col gap-0.5">
                    <h6 className="text-[16px] text-white leading-6">July, 6th 2025</h6>
                    <p className="text-[14px] text-[#CACACA] leading-6">Deposited</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-[2px]">
                <h6 className="text-[16px] text-[#11CABE] leading-6 font-semibold">0.442111 <span className="text-white">BTC</span></h6>
                <p className="text-[16px] text-[#CACACA] leading-6">ID: 21naSAN214532</p>
            </div>
        </div>
    )
}