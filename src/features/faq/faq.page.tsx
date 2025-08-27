import { HomeHero } from "../home/home-hero";
import { FaqList } from "./faq-list";

export function FAQPage() {
    return (
        <div className="flex flex-col relative gap-[100px]">
            <HomeHero
                padding="2xl:pt-[80px] lg:pt-[40px]"
                title="F.A.Q"
                text="If you still have any questions left, here’s our F.A.Q for you! We combined the most popular questions to our support team in one page."/>
            <div className="relative z-10">
                <FaqList/>
            </div>
            <img className="absolute top-[850px] left-0 z-0" src="/img/elipse-light-about.png" alt="light" />
            <img style={{ transform: "scaleX(-1)" }} className="absolute top-[850px] right-0 z-0" src="/img/elipse-light-about.png" alt="light" />
        </div>
    );
}

export default FAQPage;