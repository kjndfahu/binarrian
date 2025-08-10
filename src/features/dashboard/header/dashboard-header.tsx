import {SearchBar} from "@/features/dashboard/header/search-bar.tsx";
import {ProfileSection} from "@/features/dashboard/header/profile-section.tsx";
import {DashboardTitle} from "@/features/dashboard/header/dashboard-title.tsx";

export function DashboardHeader() {
    return (
        <div className="flex w-full py-[37px] px-8 items-center justify-between">
            <DashboardTitle/>
            <div className="flex items-center gap-10">
                <SearchBar/>
                <ProfileSection/>
            </div>
        </div>
    )
}