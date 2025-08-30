export function AuthHeader() {
    return (
        <div className="absolute flex items-center justify-between w-full lg:px-12 md:px-10 sm:px-8 px-6 lg:pt-12 md:pt-[3vh] pt-[3vh]">
            <img src="/img/logo.svg" alt="logo"/>
            <div className="md:flex hidden items-center justify-center gap-2 text-[16px] leading-[20px] font-medium text-white py-[14px] px-5">
                Sign up
                <img src="/img/arrow-right.svg" alt="arrow"/>
            </div>
        </div>
    )
}