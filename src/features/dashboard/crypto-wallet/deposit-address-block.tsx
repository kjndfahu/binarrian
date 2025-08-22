export function DepositAddressBlock(){
    return (
        <div
            className="relative rounded-[14px] border border-transparent bg-gradient-to-br from-[rgba(208,220,255,0.28)] to-[rgba(208,220,255,0.025)] p-[1px]">
            <div className="flex flex-col items-center bg-[#070322] rounded-[12px] gap-5 pt-5 pb-4 px-[14px]">
                <div className="flex flex-col">
                    <h6 className="text-[8px] tracking-[1px] font-bold text-[#CACACA] leading-[13px]">ADDRESS</h6>
                    <p className="text-[8px] leading-[17px] text-[#CACACA]">Only send ETH to this address. Sending any
                        other asset to this address may result in the loss of your deposit!</p>
                </div>
                <div className="flex items-center justify-between cursor-pointer w-full text-[12px] leading-4 font-medium text-white py-[11px] px-4 rounded-[4px] indice-bg">
                    KJ65FJEOW874KUSH11KDA
                    <img className="w-4 h-4" src="/img/copy.svg" alt="copy"/>
                </div>
                <img className="w-[91px] h-[91px]" src="/img/qr.svg" alt="qr"/>
                <p className="font-medium text-center text-[8px] leading-[10px] text-[#CACACA]"><span className="text-[#8547F6]">Ethereum</span> deposits are available after 2 network confirmations.</p>
            </div>
        </div>

    )
}