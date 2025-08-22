export function ProfileNavbarAdaptive() {
    return (
        <div
            className="md:hidden flex items-center justify-between cursor-pointer text-[14px] text-white leading-[22px] font-semibold px-4 py-2 rounded-full border-[1px] border-white">
            Profile
            <img className="w-[14px] h-[14px] rotate-90" src="/img/arrow-right.svg" alt=""/>
        </div>
    )
}