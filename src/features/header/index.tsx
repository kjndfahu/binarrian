import { HeaderBtns } from "./header-btns";
import { Navigation } from "./navigation";

export function AppHeader({top}:{top:string}) {
  return (
    <header className="flex relative backdrop-blur-3xl border-b-[1px] border-b-[#FFFFFF33] px-20 items-center justify-between py-4">
      <img src="/img/logo.svg" alt="logo" className="relative z-10 cursor-pointer pointer-events-none select-none" />
      <Navigation/>
      <HeaderBtns/>
      <img 
        className="inset-0 w-full absolute top-0 z-[3] pointer-events-none select-none" 
        src="/img/points.avif" 
        alt="points" 
      />
      <img 
        className={`inset-0 w-full absolute ${top} z-[1] pointer-events-none select-none`}
        src="/img/arrow-down.png" 
        alt="arrow-down" 
      />
    </header>
  );
}