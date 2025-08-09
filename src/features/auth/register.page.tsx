import { RegisterBtns } from "./register-btns";
import { RegisterInputs } from "./register-inputs";

export function RegisterPage(){
    return (
        <div className="flex items-center w-full p-4">
            <img className="max-h-[95vh]" src="/img/auth.png"/>
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="flex flex-col gap-10">
                    <h2 className="text-[48px] text-left about-text leading-11">Sign Up to<br/> Get Started</h2>
                    <RegisterInputs/>
                    <RegisterBtns/>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
