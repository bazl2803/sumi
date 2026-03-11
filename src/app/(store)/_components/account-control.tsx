'use client'

import {SignupButton} from "./signup-button";
import {ProfileButton} from "./profile-button";
import {authClient} from "@/lib/auth/auth-client";

export const AccountControl = () => {
    // Get current session
    const {data: session, refetch} = authClient.useSession()

    // If session is null, return SignupButton
    if (!session) return <SignupButton/>

    return <ProfileButton user={session.user}/>
}