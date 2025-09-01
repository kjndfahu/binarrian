import {ROUTES} from "@/shared/model/routes.ts";
import {useNavigate} from "react-router-dom";

export function RegisterBtns(){
    const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        navigate(link);
    };

    return (
        <div className="flex flex-col pt-4 gap-2">
            <button className="flex items-center justify-center gap-2 font-bold text-[16px] cursor-pointer text-white leading-[20px] visit-btn rounded-full h-[51px] sm:w-[335px] w-full">
                Sign up
                <img src="/img/arrow-right.svg" alt="arrow"/>
            </button>
            <div className="flex items-center justify-center cursor-pointer font-bold text-[16px] leading-[20px] text-[#9CA3AF] sm:w-[335px] w-full h-[49px]">
                Forgot password?
            </div>
            <div className="flex items-center cursor-pointer justify-center gap-2 font-medium text-[14px] leading-[20px] text-[#9CA3AF] sm:w-[335px] w-full h-[49px]">
                Already have an account? <span onClick={() => handleNavigation(ROUTES.LOGIN)} className="hero-text underline">Log in</span>
            </div>
        </div>
    )
}