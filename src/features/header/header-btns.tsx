import {useNavigate} from "react-router-dom";
import {ROUTES} from "@/shared/model/routes.ts";

export function HeaderBtns(){
    const navigate = useNavigate();

    const handleNavigation = (link: string) => {
        navigate(link);
    };
  return (
    <div className="flex flex-row items-center text-[14px] text-[#DFDFDF] font-normal leading-[24px] h-[44px] gap-6">
      <button onClick={() => handleNavigation(ROUTES.LOGIN)} className="py-3 px-5  rounded-full backdrop-blur-3xl cursor-pointer header-btns-bg header-btns-border">
        Sign In
      </button>
      <button onClick={() => handleNavigation(ROUTES.REGISTER)} className="py-3 rounded-full px-5 backdrop-blur-3xl cursor-pointer header-btns-bg header-btns-border">
        Get Started
      </button>
    </div>
  )
}

