import { LoginBtns } from "./login-btns";
import { LoginInputs } from "./login-inputs";

export function LoginPage(){
    return (
        <div className="flex items-center w-full p-4">
            <img className="max-h-[95vh]" src="/img/auth.png"/>
            {/* <div className="w-1/2"></div> */}
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="flex flex-col gap-10">
                    <h2 className="text-[48px] text-left about-text leading-16">Log in</h2>
                    <LoginInputs/>
                    <LoginBtns/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;