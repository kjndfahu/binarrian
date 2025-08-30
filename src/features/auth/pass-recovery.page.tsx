import {RecoveryPassForm} from "@/features/auth/recovery-pass-form.tsx";
import {NewPasswordForm} from "@/features/auth/new-password-form.tsx";
import {SecurityVereficationForm} from "@/features/auth/security-verefication-form.tsx";

export function PassRecoveryPage(){
    return (
        <div className="flex items-center xl:justify-start justify-center min-h-screen w-full sm:p-4 p-6">
            <img className="xl:flex hidden max-h-[95vh]" src="/img/auth.png"/>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col sm:w-auto w-full gap-10">
                    {/*<RecoveryPassForm/>*/}
                    {/*<NewPasswordForm/>*/}
                    <SecurityVereficationForm/>
                </div>
            </div>
        </div>
    )
}

export default PassRecoveryPage;