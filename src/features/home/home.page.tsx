import { HomeHero } from "./home-hero";
import { HowItWorks } from "./how-it-works";
import { OurBenefits } from "./our-benefits";
import { ProjectInfo } from "./project-info";
import { TrendAssets } from "./trend-assets";
import {PlatformInfo} from "@/features/home/platform-info.tsx";

export function HomePage() {
  return (
    <div className="flex flex-col gap-[100px] overflow-x-hidden">
      <HomeHero padding="pt-[80px]" title="Buy & trade with ease on the trusted crypto exchange" form={
        <div className="flex items-center text-white gap-5">
                <button className="h-[48px] rounded-full px-5 backdrop-blur-3xl cursor-pointer get-started-bg">
                    Get Started
                </button>
                <button className="h-[48px] px-5 rounded-full backdrop-blur-3xl cursor-pointer hero-signin-bg hero-signin-border">
                    Sign In
                </button>
            </div>
      }/>
      <ProjectInfo/>
      <HowItWorks/>
      <OurBenefits/>
      <TrendAssets/>
        <PlatformInfo/>
    </div>
  );
}

export default HomePage; 