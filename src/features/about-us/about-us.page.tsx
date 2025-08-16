import { HomeHero } from "../home/home-hero";
import { Roadmap } from "./roadmap";
import { Text } from "./text";

export function AboutUsPage(){
    return (
        <div className="flex flex-col relative overflow-x-hidden gap-[100px]">
            <HomeHero title="About Us" padding="lg:pt-[100px] "/>
            <img className="self-center pt-[50px]" src="/img/about-us.svg" alt="about-us" />
            <div className="flex flex-col 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 lg:gap-[35px] sm:gap-[65px] gap-[96px]">
                <Text title="ABOUT US" text="Our service is the statement of a new standard in the cryptocurrency industry. Cryptocurrency exchange Binarrian was founded in 2017 by a prominent financial and Blockchain-technology specialist, Stefan Feldmann. Feldmann is a Swiss financial strategist and tycoon, held top positions at investment corporation UBS Group AG for many years. Stefan's hard mental labor at UBS made him an expert in asset management and portfolio diversification, while his vast 17 years of experience brought knowledge of financial analytics and security."/>
                <Text title="The concept of partnerships" text="With a huge passion for achieving excellence and sharing Feldmann's vision, Thomas Blake, a financial whale with a background in stock market trading and an expert in cybersecurity, and Elizabeth Davis, a skillful marketer with a background at Western Union, joined the project with a wealth of experience in financial technology."/>
                <Text title="The main idea and immediate mission of the company" text="Binarrian is dedicated to setting a new standard in the cryptocurrency industry by providing the highest level of security, transparency and convenience to its users. We aim to ensure that every investor can safely participate in the digital future by utilizing our cutting-edge cryptocurrency trading and exchange platform. Since 2017, Binarrian has successfully served over 360,000 active users with more than 30,000 successful transactions every day. The company pays special attention to security, using the basic principles of decentralization, advanced cloud technology and unique encryption."/>
            </div>
            <img className="absolute top-[850px] left-0" src="/img/elipse-light-about.png" alt="light" />
            <img style={{ transform: "scaleX(-1)" }} className="absolute top-[850px] right-0" src="/img/elipse-light-about.png" alt="light" />
            <img className="absolute top-[850px] right-[0px]" src="/img/round-light-about.png" alt="light" />
            <Roadmap/>
        </div>
    )
}

export default AboutUsPage; 