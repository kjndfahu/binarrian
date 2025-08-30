import { Avatar } from "./avatar";
import { FundBlock } from "./fund-block";

export function JoinCommunity(){
    return (
        <div className="flex relative w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6">
            <div className="px-[clamp(40px,8vw,112px)] py-[clamp(44px,9vw,124px)] border-[1px] shadow-communi border-[#B929FF] rounded-full w-full aspect-square">
                <div className="px-[clamp(50px,10vw,138px)] py-[clamp(42px,8.5vw,117px)] border-[1px] border-[#8A4EF680] rounded-full w-full aspect-square">
                    <div className="flex flex-col gap-[clamp(12px,2.5vw,33px)] items-center justify-center px-[clamp(16px,3.5vw,80px)] border-[1px] border-[#AF04FF33] rounded-full w-full aspect-square">
                        <h3 className="text-[clamp(24px,5vw,60px)] text-white text-center leading-[clamp(26px,5.5vw,65px)]">Join Our<br/> Community</h3>
                        <div className="flex items-center justify-center cursor-pointer border-[1px] border-white text-white text-center w-[clamp(120px,15vw,180px)] h-[clamp(40px,5vw,55px)] rounded-full join-bg text-[clamp(14px,1.8vw,16px)]">Join Us</div>
                    </div>
                </div>
            </div>
            

            <FundBlock styles="top-[clamp(80px,15vw,180px)] left-[clamp(80px,15vw,200px)]"/>
            <Avatar styles="top-[clamp(80px,15vw,180px)] left-[clamp(200px,35vw,520px)]"/>
            <FundBlock styles="top-[clamp(100px,18vw,230px)] right-[clamp(60px,12vw,140px)]"/>
            <Avatar styles="top-[clamp(160px,30vw,400px)] right-[clamp(160px,30vw,400px)]"/>
            <FundBlock styles="bottom-[clamp(120px,22vw,300px)] left-[clamp(40px,8vw,100px)]"/>
            <Avatar styles="bottom-[clamp(200px,35vw,480px)] left-[clamp(40px,8vw,100px)]"/>
            <FundBlock styles="bottom-[clamp(50px,10vw,120px)] left-[40%]"/>
            <Avatar styles="bottom-[clamp(120px,22vw,280px)] left-[40%]"/>
        </div>
    )
}