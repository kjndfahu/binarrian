export function ProfileSection() {
    return (
        <div className="md:flex w-auto hidden items-center gap-4">
            <h4 className="text-[16px] text-white leading-[27px] font-semibold">John Doe</h4>
            <div className="w-[38px] h-[38px] aspect-square bg-black rounded-full"></div>
            <img className="rotate-90 cursor-pointer" src="/img/arrow-right.svg"/>
        </div>
    )
}