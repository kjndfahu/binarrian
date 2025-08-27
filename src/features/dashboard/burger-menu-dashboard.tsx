import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";
import { motion } from "framer-motion";
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

interface BurgerMenuProps {
    onClose: () => void;
}

export function BurgerMenuDashboard({ onClose }: BurgerMenuProps) {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const navItems = [
        { label: "Overview", route: ROUTES.OVERVIEW, logo: OverviewLogo },
        { label: "Trading", route: ROUTES.TRADING, logo: TradingLogo },
        { label: "Crypto Wallet", route: ROUTES.CRYPTOWALLET, logo: Wallet },
        { label: "Market", route: ROUTES.MARKET, logo: Market },
        { label: "Staking", route: ROUTES.STACKING, logo: Stacking },
        { label: "Swap", route: ROUTES.SWAP, logo: Swap },
        { label: "Transactions", route: ROUTES.TRANSACTIONS, logo: Transactions },
        { label: "Referral System", route: ROUTES.REFERRALSYSTEM, logo: ReferralSystem },
        { label: "Settings", route: ROUTES.PROFILE, logo: SettingsLogo },
    ] as const;

    const handleNav = (route?: string) => {
        if (route) {
            navigate(route);
            onClose();
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.7 }
    };

    const menuVariants = {
        hidden: { x: "100%" },
        visible: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                duration: 0.2
            }
        }
    };

    return (
        <>
            <motion.div
                variants={overlayVariants}
                initial="hidden"
                animate="visible"
                className="fixed inset-0 bg-black z-[1000] bg-opacity-70"
                onClick={onClose}
            ></motion.div>
            <motion.div
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="fixed inset-0 bg-[#070322] z-[1001] min-h-screen flex flex-col"
            >
                <div className="flex justify-between items-center px-6 py-[38px]">
                    <img src="/img/logo.svg" alt="Logo" />
                    <img
                        onClick={onClose}
                        className="cursor-pointer"
                        src="/img/burger-open.svg"
                        alt="Close menu"
                    />
                </div>

                <div className="flex-1 flex flex-col pb-[37px] h-[90%] px-6">
                    <nav className="flex flex-col gap-6 mt-8">
                        {navItems.map((item, idx) => {
                            const LogoComponent = item.logo;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => handleNav(item.route)}
                                    className="flex items-center gap-10 text-left cursor-pointer text-[24px] text-[#DFDFDF] leading-[32px] font-medium"
                                >
                                    <LogoComponent color="#ffffff" />
                                    {item.label}
                                </div>
                            );
                        })}
                    </nav>

                </div>
            </motion.div>
        </>
    );
}