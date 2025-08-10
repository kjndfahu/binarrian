"use client"

import {useState} from "react";
import {ProfileNavbar} from "@/features/dashboard/settings/profile-navbar.tsx";
import {ProfileSection} from "@/features/dashboard/settings/profile-section.tsx";
import {VerificationSection} from "@/features/dashboard/settings/verification-section.tsx";
import {IdCardSection} from "@/features/dashboard/settings/id-card-section.tsx";
import {PasswordSection} from "@/features/dashboard/settings/password-section.tsx";
import {TwoFacSection} from "@/features/dashboard/settings/two-fac-section.tsx";
import {SessionsSection} from "@/features/dashboard/settings/sessions-section.tsx";

export function ProfilePage() {
    const [tab, setTab] = useState("profile");

    return (
        <div className="flex flex-col gap-6 w-full px-8">
            <ProfileNavbar tab={tab} setTab={setTab} />
            {tab === "profile" && (
                <ProfileSection/>
            )}
            {tab === "verification" && (
                <>
                    <VerificationSection/>
                    <IdCardSection/>
                </>

            )}
            {tab === "password" && (
                <PasswordSection/>
            )}
            {tab === "2fa" && (
                <TwoFacSection/>
            )}
            {tab === "sessions" && (
                <SessionsSection/>
            )}
        </div>
    )
}

export default ProfilePage;