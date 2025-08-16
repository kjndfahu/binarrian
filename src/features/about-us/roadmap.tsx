import { RoadmapSection } from "./roadmap-section";

export function Roadmap(){
    return (
        <div className="flex flex-col pb-[160px] overflow-y-hidden overflow-x-hidden relative items-center gap-[35px] 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6 mt-[60px]">
            <h2 className="2xl:text-[47px] lg:text-[42px] md:text-[38px] sm:text-[34px] text-[32px] uppercase font-bold about-text">Roadmap</h2>
            <RoadmapSection 
                title='The beginning of the "journey"'
                text="The ambitious cryptocurrency exchange started its development in 2017 under the leadership of a prominent Blockchain technology expert, Stefan Feldmann. Stefan and his friends were looking for a safe platform to trade cryptocurrency, but at that time there were no fully decentralized crypto exchanges. That's when the idea was born to turn the market upside down by creating a unique project — Binarrian."
                date="May 2017"/>

            <RoadmapSection 
                title='A Gathering of Dreamers'
                text="Under the leadership of Stefan Feldmann, an experienced financial strategist and former employee of UBS Group AG, Binarrian gathers a team of dreamers and experts. This team includes Thomas Blake, an experienced trader and cybersecurity expert, and Elizabeth Davis, a seasoned marketer with extensive experience in financial technology."
                date="September 2017"/>

            <RoadmapSection 
                title='A new standard'
                text="Binarrian is making a strong start on its progress to set a new standard in the world of cryptocurrencies. Best programmers from Microsoft together with former Coinbase coders start working on organizing a sophisticated exchange decentralization system. Transparency, security and convenience become the key values that define the platform."
                date="January 2018"/>

            <RoadmapSection 
                title='Trust and growth'
                text="Binarrian is gaining trust with each passing day. By 2019, the exchange successfully serves around 100 thousand users, reaching the global market."
                date="June 2019"/>

            <RoadmapSection 
                title='Integration of new security systems'
                text="Binarrian considers the security of its users a top priority. Since April 2020, we have been using advanced cloud technology and unique encryption to protect user funds and data. Our decentralized structure ensures maximum security."
                date="April 2020"/>

            <RoadmapSection 
                title='The path to innovation - expanding our workforce'
                text='Binarrian continues its "journey" towards excellence and innovation in the world of cryptocurrencies. We are committed to ensuring that every investor can safely participate in the digital future by utilizing our cutting-edge cryptocurrency trading and exchange platform. As of March 13, 2022, Binarrian has over 1,000 employees, with about 700 of them working to improve the security of the platform."'
                date="March 2022"/>

            <img style={{ transform: "scaleX(-1)" }} className="absolute z-[1] w-[1533px] h-[1533px] top-[550px] left-[-350px]" src="/img/round-light-about.png" alt="light" />
            <img className="absolute z-[1] bottom-[-900px] right-[-100px]" src="/img/round-light-about.png" alt="light" />
        </div>
    )
}