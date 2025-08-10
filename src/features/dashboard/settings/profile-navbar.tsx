export function ProfileNavbar({tab, setTab}:{tab: string, setTab: (tab: string) => void}) {

    return (
        <div className="flex items-center self-end gap-4">
            <div
                onClick={() => setTab("profile")}
                className={`flex items-center cursor-pointer justify-center text-[16px] leading-[24px] font-semibold ${tab === 'profile' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  rounded-full py-2 px-4`}>
                Profile
            </div>
            <div
                onClick={() => setTab("verification")}
                className={`flex items-center cursor-pointer justify-center text-[16px] leading-[24px] font-semibold ${tab === 'verification' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  rounded-full py-2 px-4`}>
                Verification
            </div>
            <div
                onClick={() => setTab("password")}
                className={`flex items-center cursor-pointer justify-center text-[16px] leading-[24px] font-semibold ${tab === 'password' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  rounded-full py-2 px-4`}>
                Password
            </div>
            <div
                onClick={() => setTab("2fa")}
                className={`flex items-center cursor-pointer justify-center text-[16px] leading-[24px] font-semibold ${tab === '2fa' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  rounded-full py-2 px-4`}>
                2FA
            </div>
            <div
                onClick={() => setTab("sessions")}
                className={`flex items-center cursor-pointer justify-center text-[16px] leading-[24px] font-semibold ${tab === 'sessions' ? 'faq-bg text-white' : 'bg-transparent text-[#CACACA]'}  rounded-full py-2 px-4`}>
                Sessions & Login History
            </div>
        </div>
    )
}