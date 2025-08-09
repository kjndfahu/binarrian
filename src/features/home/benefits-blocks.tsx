import { BenefitBlock } from "./benefit-block";

const benefitInfo = [
    {
        title: 'Real-time monitoring',
        text: 'Risk management system actively monitors and analyzes user behavior in real time. If suspicious activity is detected, stricter withdrawal rules are set for security purposes.'
    },
    {
        title: 'Safety above all',
        text: 'Our system is built primarily onsecurity technologies - they are implemented inevery development cycle. We are continuously test it for strength and even offer awards for detecting errors in software provision.'
    },
    {
        title: 'Reliable asset protection',
        text: 'User funds are stored securely offline on cold wallets. We provide triple protection. User assets are safe.'
    },
    {
        title: 'Privacy defense',
        text: 'In all our products and services we care about privacy most of all. We openly communicate what data from you we receive.'
    },
    {
        title: 'Authorization',
        text: 'This information is encrypted during storage and transfers. We have implemented strict rules authorization, access to your personal information.'
    },
    {
        title: 'Adaptive Fee Structure',
        text: 'Trading fees adjust in real time based on user activity and market conditions, rewarding loyal and high-volume traders.'
    },
]

export function BenefitsBlocks(){
    return (
        <div className="flex mt-15 w-full z-[2] items-center gap-7 px-20">
            {benefitInfo.map((item) => (
                <BenefitBlock title={item.title} text={item.text}/>
            ))}
        </div>
    )
}