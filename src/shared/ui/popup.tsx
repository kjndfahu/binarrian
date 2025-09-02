export function Popup({ styles, items, onClick }: { styles: string; items: string[]; onClick?: (item: string) => void }) {
    return (
        <div
            style={{ scrollbarWidth: 'thin', scrollbarColor: '#D0DCFF8F transparent' }}
            className={`absolute z-[100] ${styles} backdrop-blur-2xl flex flex-col px-8 gap-6 w-[192px] ${items.length==2 ? 'h-[120px] py-6' : 'h-[216px] py-12'} text-white font-semibold text-[14px] leading-6 border-[1px] border-[#D0DCFF8F] rounded-[20px] buy-crypto-bg ${items.length > 3 ? 'overflow-y-auto' : ''}`}
        >
            {items.map((item, index) => (
                <p key={index} className="cursor-pointer" onClick={() => onClick?.(item)}>
                    {item}
                </p>
            ))}
        </div>
    );
}