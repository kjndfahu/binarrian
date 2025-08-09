import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";
import { AppHeader } from "../features/header";
import { AppFooter } from "@/features/footer";
import {DashboardNavbar} from "@/features/dashboard/dashboard-navbar.tsx";
import {DashboardHeader} from "@/features/dashboard/header/dashboard-header.tsx";
import TokenListingPage from "@/features/token-listing/token-listing.page.tsx";
import PrivacyPolicyPage from "@/features/privacy-policy/privacy-policy.page.tsx";
import TermsPage from "@/features/terms/terms.page.tsx";

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
                <AppHeader top="top-[300px]"/>
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
                <AppHeader top="top-[300px]"/>
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
                <AppHeader top="top-[130px]"/>
                <FAQPage />
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
                <AppHeader top="top-[80px]"/>
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
                <AppHeader top="top-[80px]"/>
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
                  <AppHeader top="top-[80px]"/>
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
                            <AppHeader top="top-[80px]"/>
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
                <AppHeader top="top-[80px]"/>
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
                            <AppHeader top="top-[80px]"/>
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
                            <AppHeader top="top-[80px]"/>
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
                            <AppHeader top="top-[80px]"/>
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
                            <AppHeader top="top-[80px]"/>
                            <TermsPage />
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
            element: <LoginPage />,
          };
        },
      },
      {
        path: ROUTES.REGISTER,
        lazy: async () => {
          const RegisterPage = (await import("../features/auth/register.page")).default;
          return {
            element: <RegisterPage />,
          };
        },
      },
      {
        path: ROUTES.PASSRECOVERY,
        lazy: async () => {
          const PassRecoveryPage = (await import("../features/auth/pass-recovery.page")).default;
          return {
            element: <PassRecoveryPage />,
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
                            <div className="flex flex-col w-full min-h-screen max-h-screnn">
                                <DashboardHeader/>
                                <OverviewPage/>
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