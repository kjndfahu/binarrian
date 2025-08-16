"use client"

import { HeaderBtns } from "./header-btns";
import { Navigation } from "./navigation";
import { useState } from "react";
import { BurgerMenu } from "@/features/header/burger-menu.tsx";

export function AppHeader({ top }: { top: string }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <header className="flex backdrop-blur-3xl lg:border-b-[1px] border-b-[#FFFFFF33] 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 items-center justify-between lg:py-4 py-[38px]">
                <img src="/img/logo.svg" alt="logo" className="relative z-10 cursor-pointer pointer-events-none select-none" />
                <Navigation />
                <HeaderBtns />
                <img onClick={() => setIsOpen(true)} className="lg:hidden flex cursor-pointer" src="/img/burger-close.svg" alt="burger-open" />

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
            {isOpen && <BurgerMenu onClose={() => setIsOpen(false)} />}
        </div>
    );
}