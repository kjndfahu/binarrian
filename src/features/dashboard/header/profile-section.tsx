import { useState, useRef, useEffect } from "react";

export function ProfileSection() {
  const [isLogout, setIsLogout] = useState(false);
  const logoutRef = useRef(null);


  useEffect(() => {
    function handleClickOutside(event) {
      if (logoutRef.current && !logoutRef.current.contains(event.target)) {
        setIsLogout(false);
      }
    }
    if (isLogout) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLogout]);

  return (
    <div className="md:flex relative w-auto hidden items-center gap-4" ref={logoutRef}>
      <h4 className="text-[16px] w-[90px] text-white leading-[27px] font-semibold">
        John Doe
      </h4>
      <div className="w-[38px] h-[38px] aspect-square bg-black rounded-full"></div>
      <img
        onClick={() => setIsLogout((prev) => !prev)}
        className="rotate-90 cursor-pointer"
        src="/img/arrow-right.svg"
      />

      <div
        className={`absolute border-[1px] border-white z-[100] top-[50px] right-[10px] flex items-center justify-center cursor-pointer buy-crypto-bg backdrop-blur-2xl text-white text-[14px] px-[6px] py-1 rounded-[12px] transition-all duration-300 ${
          isLogout
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        Logout
        <img src="/img/arrow-right.svg" />
      </div>
    </div>
  );
}
