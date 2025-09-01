import { Avatar } from "./avatar";
import { FundBlock } from "./fund-block";

export function JoinCommunity(){
    return (
        <div className="flex  w-full 2xl:px-20 xl:px-16 lg:px-12 md:px-10 sm:px-8 px-6">
            <div
                className="relative px-[clamp(40px,8vw,112px)] py-[clamp(44px,9vw,124px)] border-[1px] shadow-communi border-[#B929FF] rounded-full w-full aspect-square">
                <div
                    className="px-[clamp(50px,10vw,138px)] py-[clamp(42px,8.5vw,117px)] border-[1px] border-[#8A4EF680] rounded-full w-full aspect-square">
                    <div
                        className="flex flex-col gap-[clamp(12px,2.5vw,33px)] items-center justify-center px-[clamp(16px,3.5vw,80px)] border-[1px] border-[#AF04FF33] rounded-full w-full aspect-square">
                        <h3 className="text-[clamp(15px,5vw,60px)] text-white text-center leading-[clamp(16px,5.5vw,65px)]">Join
                            Our<br/> Community</h3>
                        <div
                            className="flex items-center justify-center cursor-pointer border-[1px] border-[#77679F] text-white text-center w-[clamp(46px,15vw,180px)] h-[clamp(14px,5vw,55px)] md:rounded-full sm:rounded-[5px] rounded-[2px] join-bg text-[clamp(5px,1.8vw,16px)]">Join
                            Us
                        </div>
                    </div>
                </div>
                <div className="absolute top-[clamp(20px,15vw,180px)] left-[clamp(2px,15vw,200px)]">
                    <FundBlock styles=""/>
                    <Avatar styles="2xl:left-[330px] lg:left-[270px] md:left-[200px] sm:left-[150px] left-[85px]"/>
                </div>
                <div className="absolute top-[clamp(10px,18vw,230px)] right-[clamp(20px,12vw,400px)]">
                    <FundBlock styles=""/>
                    <Avatar styles="lg:right-[-50px] sm:right-[-30px] right-[-15px] 2xl:top-[170px] lg:top-[120px] md:top-[100px] sm:top-[70px] top-[50px]"/>
                </div>
                <div className="absolute bottom-[clamp(100px,22vw,500px)] left-[clamp(10px,8vw,200px)]">
                    <FundBlock styles=""/>
                    <Avatar styles="2xl:bottom-[20px] xl:bottom-[30px] md:bottom-[20px] bottom-[2px]"/>
                </div>
                <div className="absolute bottom-[clamp(10px,10vw,120px)] left-[40%]">
                    <FundBlock styles=""/>
                    <Avatar styles=" lg:bottom-[20px] md:bottom-[10px] bottom-[3px]"/>
                </div>
            </div>


        </div>
    )
}