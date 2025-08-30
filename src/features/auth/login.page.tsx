import { LoginBtns } from "./login-btns";
import { LoginInputs } from "./login-inputs";

export function LoginPage(){
    return (
        <div className="flex items-center xl:justify-start justify-center min-h-screen w-full sm:p-4 p-6">
            <img className="xl:flex hidden max-h-[95vh]" src="/img/auth.png"/>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col sm:w-auto w-full gap-10">
                    <h2 className="text-[48px] text-left about-text leading-16">Log in</h2>
                    <LoginInputs/>
                    <LoginBtns/>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;