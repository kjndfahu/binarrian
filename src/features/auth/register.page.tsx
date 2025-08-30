import { RegisterBtns } from "./register-btns";
import { RegisterInputs } from "./register-inputs";

export function RegisterPage(){
    return (
        <div className="flex items-center xl:justify-start justify-center min-h-screen w-full sm:p-4 p-6">
            <img className="xl:flex hidden max-h-[95vh]" src="/img/auth.png"/>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col sm:w-auto w-full gap-10">
                    <h2 className="text-[48px] text-left about-text leading-11">Sign Up to<br/> Get Started</h2>
                    <RegisterInputs/>
                    <RegisterBtns/>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
