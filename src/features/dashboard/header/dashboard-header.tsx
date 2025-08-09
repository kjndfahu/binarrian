import {OverviewLogo} from "@/shared/ui/dashboard-icons.tsx";
import {SearchBar} from "@/features/dashboard/header/search-bar.tsx";
import {ProfileSection} from "@/features/dashboard/header/profile-section.tsx";

export function DashboardHeader() {
    return (
        <div className="flex w-full py-[37px] px-8 items-center justify-between">
            <div className="flex gap-2.5 items-center">
                <OverviewLogo color="#FFFFFF"/>
                <h2 className="text-[25px] leading-8 font-bold text-white">
                    Overview
                </h2>
            </div>
            <div className="flex items-center gap-10">
                <SearchBar/>
                <ProfileSection/>
            </div>
        </div>
    )
}