import {
    Market,
    OverviewLogo,
    ReferralSystem,
    SettingsLogo,
    Stacking,
    Swap,
    TradingLogo,
    Transactions,
    Wallet
} from "@/shared/ui/dashboard-icons.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";
import { useState, useEffect } from "react";

const routeConfig = {
    "overview": { Logo: OverviewLogo, title: 'Overview', link: ROUTES.OVERVIEW },
    "trading": { Logo: TradingLogo, title: 'Trading', link: ROUTES.TRADING },
    "crypto-wallet": { Logo: Wallet, title: 'Crypto Wallet', link: ROUTES.CRYPTOWALLET },
    "market": { Logo: Market, title: 'Market', link: ROUTES.MARKET },
    "stacking": { Logo: Stacking, title: 'Stacking', link: ROUTES.STACKING },
    "swap": { Logo: Swap, title: 'Swap', link: ROUTES.SWAP },
    "transactions": { Logo: Transactions, title: 'Transactions', link: ROUTES.TRANSACTIONS },
    "referral-system": { Logo: ReferralSystem, title: 'Referral System', link: ROUTES.REFERRALSYSTEM },
    "profile": { Logo: SettingsLogo, title: 'Settings', link: ROUTES.PROFILE },
    "default": { Logo: OverviewLogo, title: 'Overview', link: ROUTES.OVERVIEW },
};

export function DashboardNavbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname.split('/')[1] || 'default';
    const [gap, setGap] = useState(16); // Default gap value

    useEffect(() => {
        const updateGap = () => {
            const screenHeight = window.innerHeight;
            // Calculate dynamic gap: scale between 12px and 20px based on screen height
            // Assuming 720p as reference height for min gap (12px) and 1080p for max gap (20px)
            const minGap = 36;
            const maxGap = 56;
            const minHeight = 720;
            const maxHeight = 1080;
            const calculatedGap = Math.min(
                maxGap,
                Math.max(minGap, (screenHeight - minHeight) / (maxHeight - minHeight) * (maxGap - minGap) + minGap)
            );
            setGap(Math.round(calculatedGap));
        };

        updateGap(); // Initial calculation
        window.addEventListener('resize', updateGap); // Update on resize
        return () => window.removeEventListener('resize', updateGap); // Cleanup
    }, []);

    const handleNavigation = (link: string) => {
        navigate(link);
    };

    return (
        <div className="md:flex hidden fixed top-0 left-0 flex-col min-h-screen max-h-screen items-center justify-between px-7 pt-8 pb-16 w-[96px] z-10">
            <img className="cursor-pointer w-10 h-10" src="/img/binnarian-logo.svg" alt="logo"/>
            <img
                className="inset-0 w-full absolute top-0 z-[3] pointer-events-none select-none"
                src="/img/points.avif"
                alt="points"
            />
            <div className="flex flex-col relative" style={{ gap: `${gap}px` }}>
                {Object.entries(routeConfig).map(([key, { Logo, link }]) => (
                    key !== 'default' && key !== 'profile' && (
                        <div
                            key={key}
                            className="relative flex items-center cursor-pointer"
                            onClick={() => handleNavigation(link)}
                        >
                            <Logo
                                className="cursor-pointer"
                                color={path === key ? "#FFFFFF" : "#5D6588"}
                            />
                            {path === key && (
                                <div className="absolute w-[8px] h-[8px] bg-white rounded-full right-[-20px]" />
                            )}
                        </div>
                    )
                ))}
            </div>
            <div
                className="relative flex items-center cursor-pointer"
                onClick={() => handleNavigation(ROUTES.PROFILE)}
            >
                <SettingsLogo
                    className="cursor-pointer"
                    color={path === 'profile' ? "#FFFFFF" : "#5D6588"}
                />
                {path === 'profile' && (
                    <div className="absolute w-[8px] h-[8px] bg-white rounded-full right-[-20px]" />
                )}
            </div>
        </div>
    );
}