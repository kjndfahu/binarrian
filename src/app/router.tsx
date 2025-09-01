import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";
import { AppHeader } from "../features/header";
import { AppFooter } from "@/features/footer";
import {DashboardNavbar} from "@/features/dashboard/dashboard-navbar.tsx";
import {DashboardHeader} from "@/features/dashboard/header/dashboard-header.tsx";
import {AuthHeader} from "@/features/auth/auth-header.tsx";

export const router = createBrowserRouter([
    {
        element: (
            <Providers>
                <App />
            </Providers>
        ),
        errorElement: <div>Error occurred</div>,
        children: [
            {
                path: ROUTES.HOME,
                lazy: async () => {
                    const HomePage = (await import("../features/home/home.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[300px] xl:top-[400px] lg:top-[350px] sm:top-[500px] top-[550px]"/>
                                <HomePage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.BUYCRYPTO,
                lazy: async () => {
                    const BuyCryptoPage = (await import("../features/buy-crypto/buy-crypto.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[200px] xl:top-[250px] lg:top-[290px] sm:top-[500px] top-[550px]"/>
                                <BuyCryptoPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.FAQ,
                lazy: async () => {
                    const FAQPage = (await import("../features/faq/faq.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[130px] xl:top-[140px] lg:top-[170px] md:top-[250px] sm:top-[300px] top-[380px]"/>
                                <FAQPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.TRADE,
                lazy: async () => {
                    const TradePage = (await import("../features/trade/trade.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] md:top-[100px] sm:top-[130px] top-[190px]"/>
                                <TradePage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.ABOUTUS,
                lazy: async () => {
                    const AboutUsPage = (await import("../features/about-us/about-us.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] md:top-[100px] sm:top-[130px] top-[190px]"/>
                                <AboutUsPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.INDICES,
                lazy: async () => {
                    const IndicesPage = (await import("../features/indices/indices.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] top-[200px]"/>
                                <IndicesPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.BUGBOUNTY,
                lazy: async () => {
                    const BugBountyPage = (await import("../features/bug-bounty/bug-bounty.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] top-[200px]"/>
                                <BugBountyPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.REGULATORYLICENSE,
                lazy: async () => {
                    const RegulatoryLicensePage = (await import("../features/regulatory-license/regulatory-license.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] md:top-[100px] sm:top-[130px] top-[190px]"/>
                                <RegulatoryLicensePage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.COOKIES,
                lazy: async () => {
                    const CookiesPage = (await import("../features/cookies/cookies.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] top-[200px]"/>
                                <CookiesPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.TOKENLISTING,
                lazy: async () => {
                    const TokenListingPage = (await import("../features/token-listing/token-listing.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[150px] xl:top-[250px] lg:top-[280px] top-[370px]"/>
                                <TokenListingPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.LAWENFORECMENT,
                lazy: async () => {
                    const LawEnforcementRequests = (await import("../features/law-enforcement-requests/law-enforcement-requests.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] top-[200px]"/>
                                <LawEnforcementRequests />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.PRIVACYPOLICY,
                lazy: async () => {
                    const PrivacyPolicyPage = (await import("../features/privacy-policy/privacy-policy.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] top-[200px]"/>
                                <PrivacyPolicyPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.TERMS,
                lazy: async () => {
                    const TermsPage = (await import("../features/terms/terms.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] top-[200px]"/>
                                <TermsPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.MARKETS,
                lazy: async () => {
                    const MarketPage = (await import("../features/market/market.page")).default;
                    return {
                        element: (
                            <>
                                <AppHeader top="2xl:top-[80px] xl:top-[140px] lg:top-[170px] md:top-[100px] sm:top-[130px] top-[190px]"/>
                                <MarketPage />
                                <AppFooter />
                            </>
                        ),
                    };
                },
            },
            {
                path: ROUTES.LOGIN,
                lazy: async () => {
                    const LoginPage = (await import("../features/auth/login.page")).default;
                    return {
                        element: (
                            <div>
                                <AuthHeader/>
                                <LoginPage />
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.REGISTER,
                lazy: async () => {
                    const RegisterPage = (await import("../features/auth/register.page")).default;
                    return {
                        element: (
                            <div>
                                <AuthHeader/>
                                <RegisterPage />
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.PASSRECOVERY,
                lazy: async () => {
                    const PassRecoveryPage = (await import("../features/auth/pass-recovery.page")).default;
                    return {
                        element: (
                            <div>
                                <AuthHeader/>
                                <PassRecoveryPage />
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.OVERVIEW,
                lazy: async () => {
                    const OverviewPage = (await import("../features/dashboard/overview/overview.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full h-full overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <OverviewPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.REFERRALSYSTEM,
                lazy: async () => {
                    const ReferralSystemPage = (await import("../features/dashboard/referral-system/referral-system.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full h-full overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <ReferralSystemPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.PROFILE,
                lazy: async () => {
                    const ProfilePage = (await import("../features/dashboard/settings/profile.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full min-h-screen max-h-screen overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <ProfilePage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.MARKET,
                lazy: async () => {
                    const MarketPage = (await import("../features/dashboard/market/market.page")).default;
                    return {
                        element: (
                            <div className="flex overflow-y-hidden">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full h-full md:ml-[80px]">
                                    <DashboardHeader/>
                                    <MarketPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.CRYPTOWALLET,
                lazy: async () => {
                    const CryptoWalletPage = (await import("../features/dashboard/crypto-wallet/crypto-wallet.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full h-full md:ml-[80px]">
                                    <DashboardHeader/>
                                    <CryptoWalletPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.TRANSACTIONS,
                lazy: async () => {
                    const TransactionsPage = (await import("../features/dashboard/transactions/transactions.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full min-h-screen max-h-screen overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <TransactionsPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.STACKING,
                lazy: async () => {
                    const StackingPage = (await import("../features/dashboard/stacking/stacking.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full h-full overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <StackingPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.SWAP,
                lazy: async () => {
                    const SwapPage = (await import("../features/dashboard/swap/swap.page")).default;
                    return {
                        element: (
                            <div className="flex">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full min-h-screen max-h-screen overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <SwapPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: ROUTES.TRADING,
                lazy: async () => {
                    const TradingPage = (await import("../features/dashboard/trading/trading.page")).default;
                    return {
                        element: (
                            <div className="flex overflow-y-hidden">
                                <DashboardNavbar/>
                                <div className="flex flex-col w-full h-full overflow-y-auto md:ml-[80px]">
                                    <DashboardHeader/>
                                    <TradingPage/>
                                </div>
                            </div>
                        ),
                    };
                },
            },
            {
                path: "*",
                element: (
                    <>
                        <AppHeader top="top-[80px]" />
                        <div>Page not found</div>
                    </>
                ),
            }
        ],
    },
]);