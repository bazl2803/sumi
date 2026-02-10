import { auth } from "@/lib/auth"

export const signInSocial = async () => {
    await auth.api.signInSocial({
        body: {
            provider: 'google',
        }
    })
}