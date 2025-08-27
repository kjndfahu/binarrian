"use client"

import { HeaderBtns } from "./header-btns";
import { Navigation } from "./navigation";
import { useState } from "react";
import { BurgerMenu } from "@/features/header/burger-menu.tsx";
import {useLocation} from "react-router-dom";

export function AppHeader({ top }: { top: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    console.log(location.pathname)
    return (
        <div>
            <header className="flex relative backdrop-blur-3xl lg:border-b-[1px] border-b-[#FFFFFF33] 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 items-center justify-between lg:py-4 py-[38px]">
                <img src="/img/logo.svg" alt="logo" className="relative z-10 cursor-pointer pointer-events-none select-none" />
                <Navigation />
                <HeaderBtns />
                <img onClick={() => setIsOpen(true)} className="lg:hidden flex cursor-pointer" src="/img/burger-close.svg" alt="burger-open" />

                <img
                    className="inset-0 w-full absolute top-0 z-[3] pointer-events-none select-none"
                    src="/img/points.avif"
                    alt="points"
                />
                {location.pathname !== "/trade" && (
                    <img
                        className={`inset-0 w-full absolute ${top} z-[1] pointer-events-none select-none`}
                        src="/img/arrow-down.png"
                        alt="arrow-down"
                    />
                )}
                {location.pathname === "/" && (
                    <div
                        className={`flex items-center justify-center absolute 2xl:top-[600px] xl:top-[500px] lg:top-[350px] sm:top-[500px] top-[550px] left-[45%] z-[2] cursor-pointer w-[120px] h-[118px] arrow-down-bg rounded-full border-[1.5px] border-white`}>
                        <img src="/img/arrow-down-svg.svg" alt="arrow"/>
                    </div>
                )}
            </header>
            {isOpen && <BurgerMenu onClose={() => setIsOpen(false)} />}
        </div>
    );
}