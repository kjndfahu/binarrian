'use client'

import {SearchBar} from "@/features/dashboard/header/search-bar.tsx";
import {ProfileSection} from "@/features/dashboard/header/profile-section.tsx";
import {DashboardTitle} from "@/features/dashboard/header/dashboard-title.tsx";
import {useState} from "react";
import {BurgerMenuDashboard} from "@/features/dashboard/burger-menu-dashboard.tsx";

export function DashboardHeader() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col w-full md:py-[37px] py-6 lg:px-8 md:px-5 px-4 gap-6">
            <div className="flex gap-5 w-full items-center justify-between">
                <img src="/img/logo.svg" alt="logo"
                     className="md:hidden flex relative z-10 cursor-pointer pointer-events-none select-none"/>
                <div className="md:flex hidden">
                    <DashboardTitle/>
                </div>
                <div className="flex items-center w-full md:gap-10 gap-4">
                    <SearchBar/>
                    <ProfileSection/>
                    <img onClick={() => setIsOpen(true)} className="md:hidden flex cursor-pointer"
                         src="/img/burger-close.svg" alt="burger-open"/>
                </div>

            </div>
            <div className="md:hidden flex">
                <DashboardTitle/>
            </div>
            {isOpen && <BurgerMenuDashboard onClose={() => setIsOpen(false)} />}
        </div>

    )
}