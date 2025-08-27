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
import {ROUTES} from "@/shared/model/routes.ts";

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

    const handleNavigation = (link: string) => {
        navigate(link);
    };

    return (
        <div className="md:flex hidden fixed top-0 left-0 flex-col min-h-screen max-h-screen items-center justify-between px-7 pt-8 pb-16 gap-18 w-[80px]  z-10">
            <img className="cursor-pointer" src="/img/binnarian-logo.svg" alt="logo"/>
            <img
                className="inset-0 w-full absolute top-0 z-[3] pointer-events-none select-none"
                src="/img/points.avif"
                alt="points"
            />
            <div className="flex flex-col gap-14 relative">
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
    )
}