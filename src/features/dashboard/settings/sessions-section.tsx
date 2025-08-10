import {ActiveSessions} from "@/features/dashboard/settings/active-sessions.tsx";
import {AllSessions} from "@/features/dashboard/settings/all-sessions.tsx";

export function SessionsSection(){
    return (
        <div className="flex flex-col gap-12 pt-6">
            <ActiveSessions/>
            <AllSessions/>
        </div>
    )
}