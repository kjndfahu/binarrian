import { HomeHero } from "./home-hero";
import { HowItWorks } from "./how-it-works";
import { JoinCommunity } from "./join-community";
import { OurBenefits } from "./our-benefits";
import { ProjectInfo } from "./project-info";
import { TrendAssets } from "./trend-assets";
import {PlatformInfo} from "@/features/home/platform-info.tsx";

export function HomePage() {
  return (
      <div className="flex flex-col relative gap-[100px] overflow-y-hidden overflow-x-hidden">
          <HomeHero padding="lg:pt-[80px] md:pt-[40px] pt-[25px]"
                    title="Buy & trade with ease on the trusted crypto exchange" form={
              <div className="flex items-center text-white gap-5">
                  <button className="h-[48px] rounded-full px-5 backdrop-blur-3xl cursor-pointer get-started-bg">
                      Get Started
                  </button>
                  <button
                      className="h-[48px] px-5 rounded-full backdrop-blur-3xl cursor-pointer hero-signin-bg hero-signin-border">
                      Sign In
                  </button>
              </div>
          }/>
          <ProjectInfo/>
          <HowItWorks/>
          <OurBenefits/>
          <TrendAssets/>
          <JoinCommunity/>
          <PlatformInfo/>

          <img className="absolute top-[950px] left-0" src="/img/elipse-light-about.png" alt="light"/>
          <img className="absolute top-[950px] scale-x-[-1] right-0" src="/img/elipse-light-about.png" alt="light"/>
          <img className="absolute top-[450px] right-[0px]" src="/img/round-light-about.png" alt="light"/>
          <img className="absolute top-[2750px] z-[2] scale-x-[-1] left-[-100px]" src="/img/round-light-about.png"
               alt="light"/>
          <img className="absolute top-[5150px] z-[2] right-[-100px]" src="/img/round-light-about.png"
               alt="light"/>
      </div>
  );
}

export default HomePage; 