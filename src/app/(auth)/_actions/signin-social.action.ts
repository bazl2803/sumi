'use server'

import 'server-only'
import {auth} from "@/lib/auth";
import {headers} from "next/headers";
import {redirect} from "next/navigation";

// --- Types ------------------------------------------------------------------

type SocialProvider = 'google' | 'microsoft'

// --- Action -----------------------------------------------------------------
export const signInSocialAction =
    async (provider: SocialProvider) => {
        const {url} = await auth.api.signInSocial({
            body: {
                provider: provider,
                callbackURL: '/'
            },
            headers: await headers()
        })

        if (!url) throw new Error(`No redirect URL returned for provider: ${provider}`)

        redirect(url)
    }