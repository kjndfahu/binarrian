import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes.ts";
import { motion } from "framer-motion";

interface BurgerMenuProps {
    onClose: () => void;
}

export function BurgerMenu({ onClose }: BurgerMenuProps) {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const navItems = [
        { label: "Buy Crypto", route: ROUTES.BUYCRYPTO },
        { label: "Markets", route: ROUTES.MARKETS },
        { label: "Exchange", route: ROUTES.SWAP },
        { label: "FAQ", route: ROUTES.FAQ },
        { label: "NFT" },
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
                    <img src="/img/logo.svg" alt="" />
                    <img
                        onClick={onClose}
                        className="cursor-pointer"
                        src="/img/burger-open.svg"
                        alt="burger-open"
                    />
                </div>

                <div className="flex-1 flex flex-col pb-[37px] h-[90%] px-6">
                    <nav className="flex flex-col gap-6 mt-8">
                        {navItems.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleNav(item.route)}
                                className="text-left cursor-pointer text-[24px] text-[#DFDFDF] leading-[32px] font-medium"
                            >
                                {item.label}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-auto mb-8 flex flex-col gap-2">
                        <button
                            onClick={() => handleNav(ROUTES.LOGIN)}
                            className="py-4 px-6 cursor-pointer rounded-full backdrop-blur-3xl header-btns-bg header-btns-border text-[#DFDFDF] text-[16px] font-medium"
                        >
                            Sign In
                        </button>
                        <button
                            onClick={() => handleNav(ROUTES.REGISTER)}
                            className="py-4 px-6 cursor-pointer rounded-full backdrop-blur-3xl header-btns-bg header-btns-border text-[#DFDFDF] text-[16px] font-medium"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </motion.div>
        </>
    );
}