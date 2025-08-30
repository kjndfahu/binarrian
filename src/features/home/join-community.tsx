import { Avatar } from "./avatar";
import { FundBlock } from "./fund-block";

export function JoinCommunity(){
    return (
        <div className="flex relative w-full  px-[80px]">
            <div className="px-[112px] py-[124px] border-[1px] border-[#B929FF] rounded-full w-full aspect-square">
                <div className="px-[138px] py-[117px] border-[1px] border-[#8A4EF680] rounded-full w-full aspect-square">
                    <div className="flex flex-col gap-[33px] items-center justify-center px-20 border-[1px] border-[#AF04FF33] rounded-full w-full aspect-square">
                        <h3 className="text-[60px] text-white text-center leading-[65px]">Join Our<br/> Community</h3>
                        <div className="flex items-center justify-center cursor-pointer border-[1px] border-white text-white text-center w-[180px] h-[55px] rounded-full join-bg">Join Us</div>
                    </div>
                </div>
            </div>
            <FundBlock styles="top-[180px] left-[200px]"/>
            <Avatar styles="top-[180px] left-[520px]"/>
            <FundBlock styles="top-[230px] right-[140px]"/>
            <Avatar styles="top-[400px] right-[400px]"/>
            <FundBlock styles="bottom-[300px] left-[100px]"/>
            <Avatar styles="bottom-[480px] left-[100px]"/>
            <FundBlock styles="bottom-[120px] left-[40%]"/>
            <Avatar styles="bottom-[280px] left-[40%]"/>
        </div>
    )
}