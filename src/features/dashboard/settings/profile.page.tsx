"use client"

import {useState} from "react";
import {ProfileNavbar} from "@/features/dashboard/settings/profile-navbar.tsx";
import {ProfileSection} from "@/features/dashboard/settings/profile-section.tsx";
import {VerificationSection} from "@/features/dashboard/settings/verification-section.tsx";
import {IdCardSection} from "@/features/dashboard/settings/id-card-section.tsx";
import {PasswordSection} from "@/features/dashboard/settings/password-section.tsx";
import {TwoFacSection} from "@/features/dashboard/settings/two-fac-section.tsx";
import {SessionsSection} from "@/features/dashboard/settings/sessions-section.tsx";
import {ProfileNavbarAdaptive} from "@/features/dashboard/settings/profile-navbar-adaptive.tsx";

export function ProfilePage() {
    const [tab, setTab] = useState("profile");

    return (
        <div className="flex flex-col gap-6 w-full lg:px-8 md:px-5 px-4">
            <ProfileNavbar tab={tab} setTab={setTab} />
            <ProfileNavbarAdaptive/>
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