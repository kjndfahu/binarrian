export function Logo({size, icon}: {size: string, icon: string}) {
    return (
        <div className={`flex absolute top-[-30px] items-center logo-round justify-center rounded-full border-[1px] border-[#CB97FF] p-[15px] ${size}`}>
            <img src={icon} alt="icon"/>
        </div>
    )
}