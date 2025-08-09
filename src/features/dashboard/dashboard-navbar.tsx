import {
    Market,
    OverviewLogo,
    SettingsLogo,
    Stacking,
    Swap,
    TradingLogo,
    Transactions,
    Wallet
} from "@/shared/ui/dashboard-icons.tsx";

export function DashboardNavbar() {
    return (
        <div className="flex flex-col min-h-screen items-center justify-between px-7 pt-8 pb-16 gap-18">
            <img className="cursor-pointer" src="/img/binnarian-logo.svg" alt="logo"/>
            <img
                className="inset-0 w-full absolute top-0 z-[3] pointer-events-none select-none"
                src="/img/points.avif"
                alt="points"
            />
            <div className="flex flex-col gap-14">
                <OverviewLogo className="cursor-pointer" color="#5D6588"/>
                <TradingLogo className="cursor-pointer" color="#5D6588"/>
                <Wallet className="cursor-pointer" color="#5D6588"/>
                <Market className="cursor-pointer" color="#5D6588"/>
                <Stacking className="cursor-pointer" color="#5D6588"/>
                <Swap className="cursor-pointer" color="#5D6588"/>
                <Transactions className="cursor-pointer" color="#5D6588"/>
            </div>
            <SettingsLogo className="cursor-pointer" color="#5D6588"/>
        </div>
    )
}