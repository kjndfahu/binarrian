import {SearchBar} from "@/features/dashboard/header/search-bar.tsx";
import {ProfileSection} from "@/features/dashboard/header/profile-section.tsx";
import {DashboardTitle} from "@/features/dashboard/header/dashboard-title.tsx";

export function DashboardHeader() {
    return (
        <div className="flex flex-col py-[37px] lg:px-8 md:px-5 px-4 gap-6">
            <div className="flex w-full items-center justify-between">
                <img src="/img/logo.svg" alt="logo"
                     className="md:hidden flex relative z-10 cursor-pointer pointer-events-none select-none"/>
                <div className="md:flex hidden">
                    <DashboardTitle/>
                </div>
                <div className="flex items-center md:gap-10 gap-4">
                    <SearchBar/>
                    <ProfileSection/>
                </div>
            </div>
            <div className="md:hidden flex">
                <DashboardTitle/>
            </div>
        </div>

    )
}