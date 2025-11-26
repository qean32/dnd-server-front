import { ResetPasswordForm } from "@component/case/form"
import { title } from "@/export"
import { usePage } from "@lib/castom-hook"

export const ResetPassword = () => {
    const { } = usePage(title.editProfile)

    return (
        <main className="flex justify-center items-center w-full h-[90vh] bg-icons">

            <div className="w-fit h-[40vh] -translate-y-1/3">
                <div className="px-10 bg-color rounded-lg py-10 pt-7 outline-bg-light">
                    <ResetPasswordForm />
                </div>
            </div>
        </main>
    )
}