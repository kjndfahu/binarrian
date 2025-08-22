import {AssetBlock} from "@/features/dashboard/overview/asset-block.tsx";

export function TopAssetsSection(){
    return (
        <div
            className="relative h-[311px] w-[55%] rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div
                className="flex flex-col relative overflow-h-hidden bg-[#070322] gap-8 h-[311px] rounded-[12px pt-6 pb-0">
                <h3 className="text-[20px] px-6 leading-[24px] text-white font-bold">Top Assets</h3>
                <div style={{scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent'}}
                     className="flex flex-col px-6 overflow-y-auto gap-4">
                    <AssetBlock/>
                    <AssetBlock/>
                    <AssetBlock/>
                    <AssetBlock/>
                </div>
                <img className="absolute w-full pointer-events-none select-none h-[77px] bottom-0 rounded-[12px]"
                     src="/img/shadow.png" alt="shadow"/>
            </div>
        </div>

    )
}