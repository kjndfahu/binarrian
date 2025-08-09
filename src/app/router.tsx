import { ROUTES } from "../shared/model/routes";
import { createBrowserRouter } from "react-router-dom";
import { App } from "./app";
import { Providers } from "./providers";
import { AppHeader } from "../features/header";
import { AppFooter } from "@/features/footer";

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