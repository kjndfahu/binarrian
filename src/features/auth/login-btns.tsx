export function LoginBtns(){
    return (
        <div className="flex flex-col pt-4 gap-2">
            <button className="flex items-center justify-center gap-2 font-bold text-[16px] cursor-pointer text-white leading-[20px] visit-btn rounded-full h-[51px] sm:w-[335px] w-full">
                Login
                <img src="/img/arrow-right.svg" alt="arrow"/>
            </button>
            <div className="flex items-center justify-center cursor-pointer font-bold text-[16px] leading-[20px] text-[#9CA3AF] sm:w-[335px] w-full h-[49px]">
                Forgot password?
            </div>
            <div className="flex items-center cursor-pointer justify-center gap-2 font-medium text-[14px] leading-[20px] text-[#9CA3AF] sm:w-[335px] w-full h-[49px]">
                Don’t have an account? <span className="hero-text underline">Sign up</span>
            </div>
        </div>
    )
}