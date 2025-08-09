export function HeaderBtns(){
  return (
    <div className="flex flex-row items-center text-[14px] text-[#DFDFDF] font-normal leading-[24px] h-[44px] gap-6">
      <button className="py-3 px-5  rounded-full backdrop-blur-3xl cursor-pointer header-btns-bg header-btns-border">
        Sign in
      </button>
      <button className="py-3 rounded-full px-5 backdrop-blur-3xl cursor-pointer header-btns-bg header-btns-border">
        Get Started
      </button>
    </div>
  )
}

