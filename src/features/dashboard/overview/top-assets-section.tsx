import {AssetBlock} from "@/features/dashboard/overview/asset-block.tsx";

export function TopAssetsSection(){
    return(
        <div className="flex flex-col relative overflow-h-hidden gap-8 h-[311px] rounded-[12px] border-[1px] border-white pt-6 pb-0 w-[55%]">
            <h3 className="text-[20px] px-6 leading-[24px] text-white font-bold">Top Assets</h3>
            <div style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }} className="flex flex-col px-6 overflow-y-auto gap-4">
                <AssetBlock/>
                <AssetBlock/>
                <AssetBlock/>
                <AssetBlock/>
            </div>
            <img className="absolute w-full pointer-events-none select-none h-[77px] bottom-0 rounded-[12px]"
                 src="/img/shadow.png" alt="shadow"/>
        </div>
    )
}