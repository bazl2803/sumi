'use server'

import 'server-only'
import { auth } from "@/lib/auth"
import { headers } from 'next/headers';

export const SignOutAction = async () => {
    await auth.api.signOut({
        headers: await headers(),
    });
}