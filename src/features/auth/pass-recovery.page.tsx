import {RecoveryPassForm} from "@/features/auth/recovery-pass-form.tsx";
import {NewPasswordForm} from "@/features/auth/new-password-form.tsx";
import {SecurityVereficationForm} from "@/features/auth/security-verefication-form.tsx";

export function PassRecoveryPage(){
    return (
        <div className="flex items-center w-full p-4">
            <img className="max-h-[95vh]" src="/img/auth.png"/>
            <div className="flex flex-col items-center justify-center w-1/2 h-full">
                <div className="flex flex-col gap-10">
                    {/*<RecoveryPassForm/>*/}
                    {/*<NewPasswordForm/>*/}
                    <SecurityVereficationForm/>
                </div>
            </div>
        </div>
    )
}

export default PassRecoveryPage;