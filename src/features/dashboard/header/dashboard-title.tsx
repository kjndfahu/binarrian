
import {
    Market,
    OverviewLogo,
    ReferralSystem, SettingsLogo,
    Stacking,
    Swap,
    TradingLogo,
    Transactions,
    Wallet
} from "@/shared/ui/dashboard-icons.tsx";
import {useLocation} from "react-router-dom";

export const routeConfig = {
    "overview": { Logo: OverviewLogo, title: 'Overview' },
    "trading": { Logo: TradingLogo, title: 'Trading' },
    "crypto-wallet": { Logo: Wallet, title: 'Crypto Wallet' },
    "market": { Logo: Market, title: 'Market' },
    "stacking": { Logo: Stacking, title: 'Staking' },
    "swap": { Logo: Swap, title: 'Swap' },
    "transactions": { Logo: Transactions, title: 'Transactions' },
    "referral-system": { Logo: ReferralSystem, title: 'Referral System' },
    "profile": { Logo: SettingsLogo, title: 'Settings' },
    "default": { Logo: OverviewLogo, title: 'Overview' },
};

export function DashboardTitle() {


    const location = useLocation();
    const path = location.pathname.split('/')[1] || 'default';
    const { Logo, title } = routeConfig[path] || routeConfig.default;

    return (
        <div className="flex gap-2.5 items-center">
            <Logo color="#FFFFFF" />
            <h2 className="text-[25px] leading-8 font-bold w-[200px] text-white">
                {title}
            </h2>
        </div>
    );
}